import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbarLogo'>
        <Link to='/'>Logo</Link>
      </div>
      <div className='navbarItem'>
        <Link to='/auction'>Auction</Link>
        <p>Pricing</p>
        <p>League</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
};

export default Navbar;
