import './Auction.css';
import { Link } from 'react-router-dom';

const AuctionItems = ({ auction }) => {
  return (
    <>
      <div className='auctionCard'>
        <h4 className='auctionCardHeading'>{auction.league}</h4>
        <p className='auctionCardDetail'>{auction.details}</p>
        <Link to='/auction' className='auctionCardLink'>
          More info
        </Link>
      </div>
    </>
  );
};

export default AuctionItems;
