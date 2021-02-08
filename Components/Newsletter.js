import React, { useState } from 'react';
import styles from './Newsletter.module.css';
import Image from 'next/image';
import { AnimateSharedLayout, motion } from 'framer-motion';
import SignUpForm from './SignUpForm';
import { useInView } from 'react-intersection-observer';

//Animation Config
const appearUpAnimation = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 1, transition: { delay: 0.3 } },
};

const Newsletter = () => {
  const [isSigningUp, setSingingUp] = useState(false);

  //Intersectional Observer Configurations
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.panelsContainer}
    >
      <div className={styles.imagePanel}>
        <motion.div whileHover={{ scale: 1.1, rotate: 12 }}>
          <Image
            src="/oldman.png"
            alt="boy wearing party glasses"
            width={295}
            height={390}
            loading="lazy"
          />
        </motion.div>
      </div>
      <motion.div className={styles.center}>
        {inView ? (
          <motion.div
            ref={ref}
            className={styles.panelTextContainer}
            variants={appearUpAnimation}
            initial="initial"
            animate="animate"
            transition="transition"
          >
            <div className={styles.panelText}>
              <AnimateSharedLayout>
                <motion.div layout className={styles.dash}>
                  -
                </motion.div>

                {!isSigningUp ? (
                  <motion.div
                    className={styles.infoPanel}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <p>
                      If it's sweet, if it's new, well, we'll let you know!
                      <br />
                      <br />
                      Sign up for our Newsletter to get all the delicious
                      updates, new flavors, events, and what amazing things our
                      team is up to!
                      <br />
                    </p>
                    <motion.div layout className={styles.dash}>
                      -
                    </motion.div>
                    <div className={styles.buttonsContainer}>
                      <motion.button
                        role="button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1 }}
                        onTap={() => setSingingUp(true)}
                      >
                        Sign Up
                      </motion.button>
                    </div>
                  </motion.div>
                ) : (
                  <SignUpForm />
                )}

              </AnimateSharedLayout>
            </div>
          </motion.div>
        ) : (
          <div></div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Newsletter;
