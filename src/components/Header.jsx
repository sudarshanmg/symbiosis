import React from 'react';
import { useState } from 'react';

import Logo from '../assets/Logos/Logo design final-06.png';
import classes from '../styles/Header.module.css';
import Hamburger from './icons/Hamburger';
import Modal from './Modal';

const Header = () => {
  const [modalClicked, setModalClicked] = useState(false);
  return (
    <div className={classes.header__container}>
      <img src={Logo} alt="logo" className={classes.logo} />
      {/* <Hamburger
        onClick={() => {
          setModalClicked((prev) => !prev);
        }}
      />
      {modalClicked && (
        <Modal
          onClick={() => {
            setModalClicked((prev) => !prev);
          }}
        />
      )} */}
    </div>
  );
};

export default Header;
