import React from 'react';
import styles from './Social.module.css';
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io';
const Social = () => {
  return (
    <>
      <div className={styles.socialIcons}>
        <a href="#" aria-label="facebook">
          <IoLogoFacebook size={25} color="white" />
        </a>
        <a href="#" aria-label="twitter">
          <IoLogoTwitter size={25} color="white" />
        </a>
        <a href="#" aria-label="instagram">
          <IoLogoInstagram size={25} color="white" />
        </a>
      </div>
      <div className={styles.location}>
        <div className={styles.address}>
            234 Main St. <br />
            Boston, MA
        </div>
        <div className={styles.phoneNumber}>
          <a
            href="tel:6173308004"
            aria-label="Phone Number 6 1 7. 3 3 0. 8 0 0 4."
          >
            281-330-8004
          </a>
        </div>
      </div>
    </>
  );
};

export default Social;
