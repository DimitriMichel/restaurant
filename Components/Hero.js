import React from 'react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Menu from './Menu';
const yAxisHandsAnimation = {
  initial: { y: 650 },
  animate: { y: 1, rotate: 360, transition: { duration: 1 } },
};
const yAxisTitleAnimation = {
  initial: { y: -50 },
  animate: { y: 1, transition: { duration: 1 } },
};
//Animation Config
const yFloatingAnimation = {
  static: { y: 0 },
  floating: {
    y: [20, -20],
    transition: {
      duration: 1.8,
      ease: 'easeInOut',
      yoyo: Infinity,
    },
  },
};
const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <Menu />
      <div className={styles.hero}>
        <motion.h1
          variants={yAxisTitleAnimation}
          initial="initial"
          animate="animate"
          transition="transition"
          className={styles.title}
        >
          Strawberry Fever!™
        </motion.h1>
        <div className={styles.imageAndText}>
          <div className={styles.text}>
            <p>
              You've had strawberry before, sure, not like this. Developed by
              scientist from the DoD and NASA, we bring something new, something
              mouth-watering, hair raising. Go ahead, take out that Home Equity
              Line of Credit, because you'll never get enough.
            </p>
          </div>
          <motion.div
            variants={yFloatingAnimation}
            initial="static"
            animate="floating"
            transition="transition"
            className={styles.heroImageContainer}
          >
            <div className={styles.image}>
              <Image
                src="/straw.png"
                alt="strawberry ice cream cone"
                width={650}
                height={650}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
