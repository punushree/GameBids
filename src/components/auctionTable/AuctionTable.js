import { useState } from 'react';
import './AuctionTable.css';

const AuctionTable = () => {
  const [auction, setAuction] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
  });
  const [baseValue, setBaseValue] = useState();

  const { input1, input2, input3, input4 } = auction;

  const changeHandler = (e) => {
    setAuction({ ...auction, [e.target.name]: e.target.value });
  };

  let value1, value2, value3, value4;
  const submitHandler1 = () => {
    value1 = parseInt(input1);
    console.log(value1);
    console.log(typeof value1);
    console.log(isNaN(value1));
  };
  const submitHandler2 = () => {
    value2 = parseInt(input2);
    console.log(typeof value2);
  };
  const submitHandler3 = () => {
    value3 = parseInt(input3);
  };
  const submitHandler4 = () => {
    value4 = parseInt(input4);
  };

  const checkWinner = (e) => {
    console.log('click');
    e.preventDefault();
    let maxi1 = Math.max(value1, value2);
    console.log(maxi1);
    const maxi2 = Math.max(value3, value4);
    console.log(maxi2);
    const maxi = Math.max(maxi1, maxi2);
    console.log(maxi);
    window.alert(`Highest bid on this player is ${parseInt(maxi)}. SOLD!!!!`);
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

  const selectPlayer = (e) => {
    const value = e.target.value;
    const filteredBase = players.filter((p) => p.name === value);

    setBaseValue(filteredBase);
  };

  return (
    <div className='auctionTable'>
      <div>
        <select name='players' id='players' onChange={selectPlayer}>
          <option value='select' default>
            Select
          </option>
          {players.map((player) => (
            <>
              <option key={player.id} value={player.name}>
                {player.name}
              </option>
            </>
          ))}
        </select>
        {baseValue && baseValue.map((b) => <p>{b.base}</p>)}
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
      {/* <h2>Sold to </h2> */}
    </div>
  );
};

export default AuctionTable;
