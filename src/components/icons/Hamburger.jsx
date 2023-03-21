import classes from '../../styles/Hamburger.module.css';

const Hamburger = ({ onClick }) => {
  return (
    <div className={classes.icon__container} onClick={onClick}>
      <svg viewBox="0 0 100 80" width="5vw" height="2vw">
        <rect width="100" height="10" style={{ fill: '#1B2C58' }}></rect>
        <rect y="30" width="100" height="10" style={{ fill: '#1B2C58' }}></rect>
        <rect y="60" width="100" height="10" style={{ fill: '#1B2C58' }}></rect>
      </svg>
    </div>
  );
};

export default Hamburger;
