import React from 'react';
import styles from './Party.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView, InView } from 'react-intersection-observer';

//Animation Config
const appearUpAnimation = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 1, transition: { delay: 0.5 } },
};
const Party = () => {
  //Intersectional Observer Configurations
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <div ref={ref} className={styles.information}>
      <div className={styles.iceCreamImage}>

          {inView ? (
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Image
                src="/partyhat.png"
                alt="woman in party hat"
                width={410}
                height={460}
                loading="lazy"
              />
            </motion.div>
          ) : (
            <div></div>
          )}

      </div>
      {inView ? (
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
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Party;
