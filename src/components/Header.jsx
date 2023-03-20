import React from 'react';
import Logo from '../assets/logo.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt='logo' />
      </div>
    </header>
  );
};

export default Header;
