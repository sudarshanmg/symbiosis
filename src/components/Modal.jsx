import classes from '../styles/Modal.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import Logo from '../assets/Logos/Logo design final-06.png';

const Modal = ({ onClick }) => {
  return (
    <div className={classes.modal__bg}>
      <div className={classes.modal__top__nav}>
        <img src={Logo} alt="logo" className={classes.logo} />
        <button className={classes.close__btn} onClick={onClick}>
          ✖
        </button>
      </div>
      <div className={classes.modal__container}>
        <Link to={'/'} className="link">
          <h1>home</h1>
        </Link>
        <Link to={'/projects'} className="link">
          <h1>projects</h1>
        </Link>
        <Link to={'/projects'} className="link">
          <h1>verto</h1>
        </Link>
        <Link to={'/projects'} className="link">
          <h1>studio</h1>
        </Link>
        <Link to={'/projects'} className="link">
          <h1>news</h1>
        </Link>
        <Link to={'/projects'} className="link">
          <h1>awards</h1>
        </Link>
        <Link to={'/projects'} className="link">
          <h1>career</h1>
        </Link>
        <Link to={'/projects'} className="link">
          <h1>contact</h1>
        </Link>
      </div>
    </div>
  );
};

export default Modal;
