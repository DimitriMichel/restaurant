import React from 'react';
import styles from './Party.module.css';
import { motion } from 'framer-motion';

const Booking = () => {
  return (
    <motion.div
      className={styles.infoTextContainer}
      variants={appearUpAnimation}
      initial="initial"
      animate="animate"
      transition="transition"
    >
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
    </motion.div>
  );
};

export default Booking;