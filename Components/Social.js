import React from 'react';
import styles from './Social.module.css';
const Social = () => {
  return (
    <>
      <div className={styles.socialIcons}>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
      <div className={styles.location}>
        <div className={styles.address}>234 Main St. Boston, MA</div>
        <div className={styles.phoneNumber}>
          <a href="tel:2813308004">281-330-8004</a>
        </div>
      </div>
    </>
  );
};

export default Social;
