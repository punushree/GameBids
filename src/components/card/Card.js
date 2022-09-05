import './Card.css';

const Card = ({ league: { league, detail, country } }) => {
  return (
    <div className='cardBox'>
      <h3 className='cardBoxHeading textCenter'>{league}</h3>
      <p className='cardBoxText'>{country}</p>
      <p className='cardBoxDetail'>{detail}</p>
      <button>See more..</button>
    </div>
  );
};

export default Card;
