import React, { useState } from 'react';
import styles from './Party.module.css';
import Image from 'next/image';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { useInView, InView } from 'react-intersection-observer';
import Calendar from 'react-calendar';
import Checkbox from './Checkbox';
import 'react-calendar/dist/Calendar.css';
//Animation Config
const appearUpAnimation = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 1, transition: { delay: 0.3 } },
};

const Booking = () => {
  const [isSelected, setSelected] = useState(false);
  const [selectedDate, setDate] = useState('');
  const [isConfirmed, setConfirmed] = useState(false);
  const [isEnabled, setEnabled] = useState(true);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={appearUpAnimation}
      transition="transition"
      className={styles.calendar}
    >
      <Calendar
        onClickDay={(value) => {
          let clickedDay = value.toString().substring(0, 15);
          if (isEnabled) {
            setDate(clickedDay);
          }
          setSelected(true);
        }}
      />
      <div className={styles.dateConfirm}>
        {isSelected ? (
          <div>
            <div className={styles.dateSelected}>{selectedDate}</div>
            {isConfirmed ? (
              <motion.div
                initial="initial"
                animate="animate"
                variants={appearUpAnimation}
                transition="transition"
              >
                Confirmed{' '}
                <span role="img" aria-label="green check mark emoji">
                  ✅
                </span>
              </motion.div>
            ) : (
              <motion.button
                onTap={() => {
                  setEnabled(false);
                  setConfirmed(true);
                }}
              >
                Confirm
              </motion.button>
            )}
          </div>
        ) : (
          <div className={styles.dateNotSelected}>Please Selected A Date</div>
        )}
      </div>
    </motion.div>
  );
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
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      ref={ref}
      className={styles.information}
    >
      <div className={styles.iceCreamImage}>
        {inView ? (
          <motion.div ref={ref} initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
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
      <div className={styles.center}>
        {inView ? (
          <motion.div
            className={styles.infoTextContainer}
            variants={appearUpAnimation}
            initial="initial"
            animate="animate"
            transition="transition"
          >
            <div className={styles.infoText}>
              <div className={styles.thanks}>-</div>
              {!isBooking ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p>
                    In order to secure more funding we've been advised to show
                    at minimum 25% growth YoY!
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
                      onTap={() => setBooking(true)}
                    >
                      Book Us
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <Booking />
              )}
              <div className={styles.magazine}>-</div>
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
