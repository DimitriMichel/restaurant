import React from 'react';
import styles from './Menu.module.css';
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from 'react-icons/ai';
import { RiFacebookCircleFill } from 'react-icons/ri';

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
    <nav>
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
              <span className={styles.storeName}>Scoops!</span>
              <div className={styles.navigationLinksA}>
                <div className={styles.navigationItem}>
                  <motion.a
                    aria-label="restaurant menu"
                    whileHover={{
                      color: '#EE4F91',
                    }}
                    href="#"
                  >
                    Menu
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
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
              className={styles.logoContainer}
            >
              <div className={styles.logo}>
                <div>
                  <Image
                    src="/icelogo.svg"
                    alt="logo"
                    width={300}
                    height={300}
                  />
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
                  Booking
                </motion.a>
              </div>
              <div className={styles.navigationItem}>
                <motion.a
                  whileHover={{
                    color: '#EE4F91',
                  }}
                  href="#"
                >
                  Visit
                </motion.a>
              </div>
              <motion.div className={styles.socialMediaIcons}>
                <span className={styles.socialIcons}>
                  <RiFacebookCircleFill size={35} color="#ee4f91" />
                </span>
                <span className={styles.socialIcons}>
                  <AiFillInstagram size={35} color="#ee4f91" />
                </span>
                <span className={styles.socialIcons}>
                  <AiFillTwitterCircle size={35} color="#ee4f91" />
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
