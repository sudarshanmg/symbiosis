import classes from '../styles/Modal.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Modal = ({ onClick }) => {
  return (
    <div className={classes.modal__bg}>
      <button className={classes.close__btn} onClick={onClick}>
        ✖
      </button>
      <div className={classes.modal__container}>
        <div className={classes.list__item}>
          <Link to={'/'}>
            <h1>Home</h1>
          </Link>
        </div>
        <div className={classes.list__item}>
          <Link to={'/projects'}>
            <h1>Projects</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
