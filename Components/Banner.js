import React from 'react';
import styles from './Banner.module.css';
import { motion } from 'framer-motion';
import { useInView, InView } from 'react-intersection-observer';
import SplitTextWrapper from '../utils/SplitTextWrapper';
//Animation Config
const appearUpAnimation = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 1, transition: { delay: 0.5 } },
};


const Banner = () => {
  //Intersectional Observer Configurations
  const [ref, inView] = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  return (
    <div ref={ref} className={styles.information}>
      {inView ? (
        <motion.div
          className={styles.infoTextContainer}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div className={styles.infoText}>
            <motion.h1
            ><SplitTextWrapper
              initial={{ y: '100%' }}
              animate="visible"
              variants={{
                visible: i => ({
                  y: 0,
                  transition: {
                    delay: i * 0.1
                  }
                })
              }}
            >
              "GREEN with ENVY"</SplitTextWrapper>
            </motion.h1>
          </motion.div>
        </motion.div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Banner;
