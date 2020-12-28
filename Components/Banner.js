import React from 'react';
import styles from './Banner.module.css';
import { motion } from 'framer-motion';

const Discover = () => {
  return (
    <div className={styles.information}>
      <div className={styles.infoTextContainer}>
        <div className={styles.infoText}>
          <h1>"GREEN with ENVY"</h1>
        </div>
      </div>
    </div>
  );
};

export default Discover;
