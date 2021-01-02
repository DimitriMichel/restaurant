import React, { useState, useEffect } from 'react';
import styles from './Info.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Wrapper from '../utils/Wrapper';
import Image from 'next/image';

//Animation Config
const appearUpAnimation = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 1, transition: { delay: 0.5 } },
};

const Info = () => {
  //Intersectional Observer Configurations
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <div ref={ref} className={styles.information}>
      <div className={styles.iceCreamImage}>
        {inView ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Image
              src="/shockedboy.png"
              alt="surprised boy"
              width={320}
              height={350}
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
              <h2>Thank You</h2>
              <br />-
            </div>
            <span className={styles.highlight}>
              <i>
                “The best ice cream in the world, as anyone who has tried it
                will argue...”
              </i>
            </span>
            <br />
            <span className={styles.whiteColor}>-</span>
            <div className={styles.magazine}>
              <h3>Time</h3>
            </div>
            <br />
          </div>
        </motion.div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Info;
