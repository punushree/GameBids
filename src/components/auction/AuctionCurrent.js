import './Auction.css';
// import { Link } from 'react-router-dom';
import AuctionItems from './AuctionItems';

const AuctionCurrent = () => {
  const currentAuction = [
    {
      id: 1,
      league: 'Premier League',
      details:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi voluptatem fuga mollitia doloremque ut iste!',
    },
    {
      id: 2,
      league: 'Champion League',
      details:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi voluptatem fuga mollitia doloremque ut iste!',
    },
  ];
  return (
    <div className='auction'>
      <h4 className='headingTertiary'>Current Auction</h4>
      <div className='auctionList'>
        {currentAuction.map((auction) => (
          <AuctionItems key={auction.id} auction={auction} />
        ))}
      </div>
    </div>
  );
};

export default AuctionCurrent;
