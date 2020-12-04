import React from 'react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
const yAxisHandsAnimation = {
  initial: { y: 650 },
  animate: { y: 1, transition: { duration: 1, } },
};
const yAxisTitleAnimation = {
  initial: { y: -50 },
  animate: { y: 1, transition: { duration: 1,  } },
};
const Hero = () => {
  return (
    <div className={styles.hero}>
      <motion.h1
        variants={yAxisTitleAnimation}
        initial="initial"
        animate="animate"
        transition="transition"
      >
        World Famous Ice Cream!™
      </motion.h1>
      <motion.div
        variants={yAxisHandsAnimation}
        initial="initial"
        animate="animate"
        transition="transition"
        className={styles.heroImageContainer}
      >
        <Image
          src="/icehands.png"
          alt="three hands holding ice cream cones"
          width={1150}
          height={600}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
