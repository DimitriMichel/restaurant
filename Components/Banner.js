import React from 'react';
import styles from './Banner.module.css';
import { motion } from 'framer-motion';
import { useInView, InView } from 'react-intersection-observer';
import SplitTextWrapper from '../utils/SplitTextWrapper';
//Animation Config
const splitTextAnimation = {
  visible: (i) => ({
    y: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};
const Banner = () => {
  //Intersectional Observer Configurations
  const [ref, inView] = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  return (
    <div ref={ref} className={styles.panelsContainer}>
      {inView ? (
        <motion.div
          className={styles.panelTextContainer}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div className={styles.panelText}>
            <motion.h2>
              <SplitTextWrapper
                initial={{ y: '100%' }}
                animate="visible"
                variants={splitTextAnimation}
              >
                GREEN with ENVY
              </SplitTextWrapper>

            </motion.h2>
            <motion.div className={styles.subHeadline}>coming soon, March 2021</motion.div>
          </motion.div>
        </motion.div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Banner;
