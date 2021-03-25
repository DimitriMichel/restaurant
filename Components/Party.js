import React, { useState } from 'react';
import styles from './Party.module.css';
import Image from 'next/image';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Booking from './Booking';
import 'react-calendar/dist/Calendar.css';

//Animation Config
const appearUpAnimation = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 1, transition: { delay: 0.3 } },
};

const Party = () => {
  const [isBooking, setBooking] = useState(false);
  //Intersectional Observer Configurations
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <motion.div
      id='booking'
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      ref={ref}
      className={styles.panelsContainer}
    >
      <div className={styles.imagePanel}>
        {inView ? (
          <motion.div ref={ref} initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div whileHover={{ scale: 1.1, rotate: -12 }}>
              <Image
                src="/partyhat.png"
                alt="woman in party hat"
                width={410}
                height={460}
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        ) : (
          <div></div>
        )}
      </div>
      <div className={styles.center}>
        {inView ? (
          <motion.div
            className={styles.panelTextContainer}
            variants={appearUpAnimation}
            initial="initial"
            animate="animate"
            transition="transition"
          >
            <div className={styles.panelText}>
              <AnimateSharedLayout>

                {!isBooking ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className={styles.infoPanel}>
                      In order to secure more funding we've been advised to show
                      at minimum 25% growth YoY!
                      <br />
                      <br />
                      So we do parties now!
                      <br />
                      Isn't that great?
                    </p>

                    <motion.div layout className={styles.dash}>
                      -
                    </motion.div>
                    <div className={styles.buttonsContainer}>
                      <motion.button
                        role="button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1 }}
                        onTap={() => setBooking(true)}
                      >
                        Book Us
                      </motion.button>
                    </div>
                  </motion.div>
                ) : (
                  <Booking />
                )}
              </AnimateSharedLayout>
            </div>
          </motion.div>
        ) : (
          <div></div>
        )}
      </div>
    </motion.div>
  );
};

export default Party;
