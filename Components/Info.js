import React from 'react';
import styles from './Info.module.css';
import Image from 'next/image';
const Info = () => {
  return (
    <div className={styles.information}>
      <div className={styles.iceCreamImage}>
        <Image
          src="/shockedboy.png"
          alt="surprised boy"
          width={340}
          height={390}
        />
      </div>
      <div className={styles.infoTextContainer}>
        <div className={styles.infoText}>
          <div className={styles.thanks}>Thank You<br/>-</div>

          <span className={styles.highlight}><i>
          “The best ice cream in the world, as anyone who has tried it will
          argue...”</i></span>
          <br />
          <div className={styles.magazine}>Time</div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Info;
