import React from 'react';
import styles from './Party.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Party = () => {
  return (
    <div className={styles.information}>
      <div className={styles.iceCreamImage}>
        <Image
          src="/partyhat.png"
          alt="woman in party hat"
          width={410}
          height={460}
          loading='lazy'
        />
      </div>
      <div className={styles.infoTextContainer}>
        <div className={styles.infoText}>
          <div className={styles.thanks}>
            <br />-
          </div>

          <p>
            In order to secure more funding we've been advised to show at
            minimum 25% growth YoY!
            <br />
            <br />
            So we do parties now!
            <br />
            Isn't that great?
          </p>
          <br />
          <div className={styles.buttonsContainer}>
            <motion.button
              role="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
            >
              Learn More
            </motion.button>
            <motion.button
              role="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
            >
              Book Us
            </motion.button>
          </div>

          <div className={styles.magazine}>-</div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Party;
