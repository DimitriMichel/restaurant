import React from 'react';
import styles from './Menu.module.css';
import Social from './Social';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Menu = () => {
  return (
    <div className={styles.welcomeMenu}>
      <div className={styles.menu}>
        <div className={styles.navigation} role="navigation">
          <div className={styles.menuSectionA}>
            <div className={styles.navigationItem}>
              <motion.a
                whileHover={{
                  color: '#EE4F91',
                }}
                href="#"
              >
                <span aria-label="restaurant menu">Menu</span>
              </motion.a>
            </div>
            <div className={styles.navigationItem}>
              <motion.a
                whileHover={{
                  color: '#EE4F91',
                }}
                href="#"
              >
                Waitlist
              </motion.a>
            </div>
          </div>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <div>
                <Image src="/icelogo.svg" alt="logo" width={350} height={350} />
              </div>
            </div>
          </div>
          <div className={styles.menuSectionB}>
            <div className={styles.navigationItem}>
              <motion.a
                whileHover={{
                  color: '#EE4F91',
                }}
                href="#"
              >
                Gift Cards
              </motion.a>
            </div>
            <div className={styles.navigationItem}>
              <motion.a
                whileHover={{
                  color: '#EE4F91',
                }}
                href="#"
              >
                Offers
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
