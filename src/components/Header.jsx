import React from 'react';
import Logo from '../assets/Logo-new.png';
import classes from '../styles/Header.module.css';

const Header = () => {
  return (
    <div className={classes.header__container}>
      <img src={Logo} alt="logo" className="logo" />
    </div>
  );
};

export default Header;
