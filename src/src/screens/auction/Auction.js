import AuctionTable from '../../components/auctionTable/AuctionTable';
import './Auction.css';

const Auction = () => {
  return (
    <div className='auction'>
      <h2 className='auctionHeading'>Internation Match</h2>
      <h2 className='auctionHeading'>League</h2>
      <AuctionTable />
    </div>
  );
};
export default Auction;
