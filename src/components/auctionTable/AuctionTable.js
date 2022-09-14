import { useState } from 'react';
import './AuctionTable.css';

const AuctionTable = (props) => {
  const [auction, setAuction] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
  });
  const [baseValue, setBaseValue] = useState();

  const { input1, input2, input3, input4 } = auction;
  let minValueOfPlayer,
    auctionValue = [];

  if (baseValue !== undefined) {
    minValueOfPlayer = baseValue.map((b) => b.base);
  }

  const changeHandler = (e) => {
    setAuction({
      ...auction,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler1 = () => {
    auctionValue.push(input1, input2, input3, input4);
  };
  const submitHandler2 = () => {
    auctionValue.push(input1, input2, input3, input4);
  };
  const submitHandler3 = () => {
    auctionValue.push(input1, input2, input3, input4);
  };
  const submitHandler4 = () => {
    auctionValue.push(input1, input2, input3, input4);
  };

  const checkWinner = (e) => {
    e.preventDefault();
    console.log(auctionValue);

    const maxi = findMax(auctionValue);

    function findMax(arr) {
      let maxValue = arr[0];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxValue) {
          maxValue = arr[i];
        }
      }
      return maxValue;
    }
    setAuction({ ...auction, input1: '', input2: '', input3: '', input4: '' });
    console.log(maxi+" "+minValueOfPlayer);
    if (maxi) {
      if (parseInt(maxi) < parseInt(minValueOfPlayer)) {
        props.func(`Bidding amounts less than base value`);
      } else {
        props.func(`Highest bid on this player is ${maxi}. SOLD!!!!`);
      }
    } else {
      props.func(`Bidding not started for player`);
    }

  };

  const selectPlayer = (e) => {
    const value = e.target.value;
    const filteredBase = players.filter((p) => p.name === value);

    setBaseValue(filteredBase);
  };

  const players = [
    {
      id: 1,
      name: 'Virat Kohli',
      base: 145,
    },
    {
      id: 2,
      name: 'Rohit Sharma',
      base: 150,
    },
    {
      id: 3,
      name: 'Hardik Pandya',
      base: 140,
    },
    {
      id: 4,
      name: 'Jasprit Bumrah',
      base: 135,
    },
  ];

  return (
    <div className='auctionTable'>
      <div>
        <select name='players' id='players' onChange={selectPlayer}>
          <option value='select' default>
            Select
          </option>
          {players.map((player) => (
            
              <option key={player.id} value={player.name}>
                {player.name}
              </option>
          ))}
        </select>
        {baseValue && minValueOfPlayer && (
          <p>Base Value : {minValueOfPlayer}</p>
        )}
      </div>
      <div className='tables'>
        <div className='table'>
          <h3>Table 1</h3>
          <input
            id='input1'
            type='number'
            name='input1'
            value={input1}
            onChange={changeHandler}
          />
          <button onClick={submitHandler1}>Send</button>
        </div>
        <div className='table'>
          <h3>Table 2</h3>
          <input
            id='input2'
            type='number'
            name='input2'
            value={input2}
            onChange={changeHandler}
          />
          <button onClick={submitHandler2}>Send</button>
        </div>
        <div className='table'>
          <h3>Table 3</h3>
          <input
            id='input3'
            type='number'
            name='input3'
            value={input3}
            onChange={changeHandler}
          />
          <button onClick={submitHandler3}>Send</button>
        </div>
        <div className='table'>
          <h3>Table 4</h3>
          <input
            id='input4'
            type='number'
            name='input4'
            value={input4}
            onChange={changeHandler}
          />
          <button onClick={submitHandler4}>Send</button>
        </div>
      </div>
      <button onClick={checkWinner} className='winnerBtn'>
        Winner
      </button>
    </div>
  );
};

export default AuctionTable;
