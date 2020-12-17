import React from 'react';
import styles from './Menu.module.css';
import Social from './Social';
import Image from 'next/image';
import { motion } from 'framer-motion';

const animateAppearUp = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    delay: 10,
  },
};
const Menu = () => {
  return (
    <div className={styles.welcomeMenu}>
      <div className={styles.menu}>
        <div className={styles.navigation} role="navigation">
          <motion.div
            variants={animateAppearUp}
            animate="animate"
            initial="initial"
            transition={{ delay: 0.5 }}
            className={styles.menuSectionA}
          >
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
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ rotate: 360 }}
            className={styles.logoContainer}
          >
            <div className={styles.logo}>
              <div>
                <Image src="/icelogo.svg" alt="logo" width={300} height={300} />
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={animateAppearUp}
            animate="animate"
            initial="initial"
            transition={{ delay: 0.5 }}
            className={styles.menuSectionB}
          >
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
