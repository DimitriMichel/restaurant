import React, { useState, useEffect } from 'react';
import styles from './Info.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Wrapper from '../utils/Wrapper';
import Image from 'next/image';
import SplitTextWrapper from '../utils/SplitTextWrapper';

//Animation Config
const appearUpAnimation = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 1, transition: { delay: 0.5 } },
};
const splitTextAnimation = {
  visible: (i) => ({
    y: 0,
    transition: {
      delay: (i + 4) * 0.4,
    },
  }),
};

const Info = () => {
  //Intersectional Observer Configurations
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <div id="menu" ref={ref} className={styles.panelsContainer}>
      <div className={styles.panelImage}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div whileHover={{ scale: 1.1, rotate: 12 }}>
            <Image
              src="/shockedboy.png"
              alt="surprised boy"
              width={300}
              height={350}
            />
          </motion.div>
        </motion.div>
      </div>
      {inView ? (
        <motion.div className={styles.panelTextContainer}>
          <div className={styles.panelText}>
            <motion.div className={styles.thanks}>
              <motion.h2>
                <SplitTextWrapper
                  initial={{ y: '100%' }}
                  animate="visible"
                  variants={splitTextAnimation}
                >
                  Thank You
                </SplitTextWrapper>
              </motion.h2>
            </motion.div>
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
