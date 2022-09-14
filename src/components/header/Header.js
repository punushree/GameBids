import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='bgImage'></div>
      <div className='headerTextBox'>
        <div className='headerBox headerContext'>
          <p className='headerBoxHeading'>Contest</p>
          <p>Place the highest bid and win the contest</p>
        </div>
        <div className='headerBox headerAbout'>
          <p className='headerBoxHeading'>About</p>
          <p>Offcial platform of BTL. Buy your favorite player</p>
        </div>
        <div className='headerBox headerEvent'>
          <p className='headerBoxHeading'>Current Auction</p>
          <p>
            BugendaiTech league, developer league, online football league ....
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
