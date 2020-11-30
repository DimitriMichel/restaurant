import React from 'react';
import styles from './Menu.module.css';
import Social from './Social';
const Menu = () => {
  return (
    <div className={styles.welcomeMenu}>
      <div className={styles.logo}>logo</div>
      <div className={styles.menu}>
        <div className={styles.menuTitle}>Menu</div>
        <ul>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Waitlist</a>
          </li>
          <li>
            <a href="#">Gift Cards</a>
          </li>
          <li>
            <a href="#">Offers</a>
          </li>
        </ul>
      </div>
      <Social />
    </div>
  );
};

export default Menu;
