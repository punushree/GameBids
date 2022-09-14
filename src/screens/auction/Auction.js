import { useState } from "react";
import AuctionTable from '../../components/auctionTable/AuctionTable';
import Card from '../../components/card/Card';
import './Auction.css';

const Auction = () => {
  const internationalLeague = [
    {
      id: 1,
      league: 'BBL',
      country: 'Australia',
      detail:
        'consectetur adipisicing elit. Fugiat eveniet non esse neque illo voluptates beatae eos quae optio numquam.',
    },
    {
      id: 2,
      league: 'PPL',
      country: 'Pakistan',
      detail:
        'Adipisicing elit. Fugiat eveniet consectetur a non esse neque illo voluptates beatae eos eveniet quae optio numquam.',
    },
    {
      id: 3,
      league: 'DPL',
      country: 'Dubai',
      detail:
        'Lorem ipsum dolor sit Fugiat eveniet non esse neque illo voluptates beatae eos quae optio numquam eveniet.',
    },
    {
      id: 4,
      league: 'BBL',
      country: 'Australia',
      detail:
        'consectetur adipisicing elit. Fugiat eveniet non esse neque illo voluptates beatae eos quae optio numquam.',
    },
  ];

  const homeLeague = [
    {
      id: 1,
      league: 'IPL',
      country: 'India',
      detail:
        'consectetur adipisicing elit. Fugiat eveniet non esse neque illo voluptates beatae eos quae optio numquam.',
    },
    {
      id: 2,
      league: 'MPL',
      country: 'India',
      detail:
        'Adipisicing elit. Fugiat eveniet consectetur a non esse neque illo voluptates beatae eos eveniet quae optio numquam.',
    },
    {
      id: 3,
      league: 'TNL',
      country: 'India',
      detail:
        'Lorem ipsum dolor sit Fugiat eveniet non esse neque illo voluptates beatae eos quae optio numquam eveniet.',
    },
    {
      id: 4,
      league: 'KPL',
      country: 'India',
      detail:
        'consectetur adipisicing elit. Fugiat eveniet non esse neque illo voluptates beatae eos quae optio numquam.',
    },
  ];
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const closeAlert = () => {
    setMessage("");
  };
  const alert_data = (maxi) => {
    console.log(maxi);
    window.scrollTo({top: 0, behavior: 'smooth'})
    if (maxi) {
      setMessage(`Highest bid on this player is ${maxi}. SOLD!!!!`);
      setType("success alert");

    } else {
      setMessage(`Bidding not started for player`);
      setType("info alert");
    }
  }
  return (
    <div className='auction'>
        {message && (
        <div className={type}>
          {message}
          <span className="closebtn" onClick={closeAlert}>
            &times;
          </span>{" "}
        </div>
      )}
      <h2 className='auctionHeading'>Internation Match</h2>
      <div className='leagueCard'>
        {internationalLeague.map((league) => (
          <Card key={league.id} league={league} />
        ))}
      </div>
      <hr style={{ marginTop: '2rem', marginBottom: '2.5rem' }} />
      <h2 className='auctionHeading'>Home League</h2>
      <div className='leagueCard'>
        {homeLeague.map((league) => (
          <Card key={league.id} league={league} />
        ))}
      </div>
      <div className='auctionTable'>
        <h2>Indian Premier League</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <AuctionTable func={alert_data}/>
      </div>
    </div>
  );
};
export default Auction;
