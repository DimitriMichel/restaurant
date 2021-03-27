import React from 'react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronCircleDown } from 'react-icons/fa';
import Menu from './Menu';

//Animation Config
const opacityAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
};
const appearUpAnimation = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 1, transition: { duration: 0.2, delay: 0.5 } },
};
const yFloatingAnimation = {
  static: { y: -80 },
  floating: {
    y: [-60, -50],
    transition: {
      duration: 1.2,
      ease: 'easeInOut',
      yoyo: Infinity,
    },
  },
};
const yBouncingAnimation = {
  static: { y: 0 },
  floating: {
    y: [-10, 10],
    transition: {
      duration: 0.6,
      ease: "easeIn",
      yoyo: Infinity,
    },
  },
};
const Hero = () => {
  return (
    <section id="hero">
      <div className={styles.heroContainer}>
        <Menu />
        <div className={styles.hero}>
          <motion.h1
            variants={appearUpAnimation}
            initial="initial"
            animate="animate"
            transition="transition"
            className={styles.title}
          >
            "Strawberry Fever"
          </motion.h1>
          <motion.div
            variants={opacityAnimation}
            initial="initial"
            animate="animate"
            transition="transition"
            className={styles.imageAndText}
          >
            <motion.div
              variants={appearUpAnimation}
              initial="initial"
              animate="animate"
              transition="transition"
              className={styles.text}
            >
              <h2>New Flavor</h2>
              <motion.p
                variants={appearUpAnimation}
                initial="initial"
                animate="animate"
                transition="transition"
              >
                Developed by scientists from the Department Of Defense and NASA,
                we bring something new, something transformative - In fact
                when's the last time you had a passionate cry?
              </motion.p>
              <motion.div
                variants={yBouncingAnimation}
                initial="static"
                animate="floating"
                transition="transition"
                className={styles.bounceArrow}
              >
                <FaChevronCircleDown size={50} color="white" />
              </motion.div>
            </motion.div>
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
                  width={280}
                  height={520}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
