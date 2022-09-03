import './Auction.css';
// import { Link } from 'react-router-dom';
import AuctionItems from './AuctionItems';

const AuctionUpcoming = () => {
  const upcomingAuction = [
    {
      id: 1,
      league: 'Developer League',
      details:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi voluptatem fuga mollitia doloremque ut iste!',
    },
    {
      id: 2,
      league: 'Champion League',
      details:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi voluptatem fuga mollitia doloremque ut iste!',
    },
    {
      id: 3,
      league: 'Kabaddi League',
      details:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi voluptatem fuga mollitia doloremque ut iste!',
    },
    {
      id: 4,
      league: 'Football League',
      details:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi voluptatem fuga mollitia doloremque ut iste!',
    },
    {
      id: 5,
      league: 'Kabaddi League',
      details:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi voluptatem fuga mollitia doloremque ut iste!',
    },
  ];

  return (
    <div className='auction'>
      <h4 className='headingTertiary'>Upcoming Auction</h4>
      <div className='auctionList'>
        {upcomingAuction.map((auction) => (
          <AuctionItems key={auction.id} auction={auction} />
        ))}
      </div>
    </div>
  );
};

export default AuctionUpcoming;
