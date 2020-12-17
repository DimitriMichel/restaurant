import React from 'react';
import styles from './Party.module.css';
import Image from 'next/image';

const Party = () => {
  return (
    <div className={styles.information}>
      <div className={styles.iceCreamImage}>
        <Image
          src="/partyhat.png"
          alt="surprised boy"
          width={390}
          height={430}
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

export default Party;