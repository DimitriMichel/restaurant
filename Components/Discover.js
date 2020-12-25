import React from 'react';
import styles from './Discover.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Discover = () => {
  return (
    <div className={styles.information}>
      <div className={styles.iceCreamImage}>
        <Image
          src="/glassesboy.png"
          alt="boy wearing party glasses"
          width={360}
          height={400}
          loading="lazy"
        />
      </div>
      <div className={styles.infoTextContainer}>
        <div className={styles.infoText}>
          <div className={styles.thanks}>
            <br />-
          </div>

          <p>
            If it's sweet, if it's new, well, we'll let you know!
            <br />
            <br />
            Sign up for our Newsletter to get all the delicious updates, new
            flavors, events, and what amazing things our team is up to!
            <br />

          </p>
          <br />
          <div className={styles.buttonsContainer}>
            <motion.button
              role="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
            >
              Sign Up
            </motion.button>
          </div>

          <div className={styles.magazine}>-</div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Discover;
