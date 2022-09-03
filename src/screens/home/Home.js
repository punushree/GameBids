import AuctionCurrent from '../../components/auction/AuctionCurrent';
import AuctionUpcoming from '../../components/auction/AuctionUpcoming';
import Header from '../../components/header/Header';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <AuctionCurrent />
      <AuctionUpcoming />
    </div>
  );
};

export default Home;
