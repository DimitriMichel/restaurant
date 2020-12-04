import React from 'react';
import styles from './Menu.module.css';
import Social from './Social';
import Image from 'next/image';
import { motion } from 'framer-motion';

//Animation Config
const yFloatingAnimation = {
  static: { y: 0 },
  floating: {
    y: [5, -5],
    transition: {
      duration: 1.8,
      ease: 'easeInOut',
      yoyo: Infinity,
    },
  },
};

const Menu = () => {
  return (
    <div className={styles.welcomeMenu}>
      <div className={styles.logocontainer}>
        <div className={styles.logo}>
          <motion.div
            variants={yFloatingAnimation}
            initial="static"
            animate="floating"
            transition="transition"
          >
            <Image src="/icelogo.svg" alt="logo" width={200} height={200} />
          </motion.div>
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.menuTitle}>Menu</div>
        <ul role="navigation">
          <li>
            <motion.a
              whileHover={{
                color: 'red',
              }}
              href="#"
            >
              <span aria-label="restaurant menu">Menu</span>
            </motion.a>
          </li>
          <li>
            <motion.a
              whileHover={{
                color: 'red',
              }}
              href="#"
            >
              Waitlist
            </motion.a>
          </li>
          <li>
            <motion.a
              whileHover={{
                color: 'red',
              }}
              href="#"
            >
              Gift Cards
            </motion.a>
          </li>
          <li>
            <motion.a
              whileHover={{
                color: 'red',
              }}
              href="#"
            >
              Offers
            </motion.a>
          </li>
        </ul>
      </div>
      <Social />
    </div>
  );
};

export default Menu;
