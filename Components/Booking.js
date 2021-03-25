import React, { useState } from 'react';
import styles from './Party.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

//Animation Config
const appearUpAnimation = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 1, transition: { delay: 0.3 } },
};

const Booking = () => {
  const [isDateSelected, setDateSelected] = useState(false);
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
      <div className={styles.dateConfirmContainer}>
        {isDateSelected ? (
          <div className={styles.dateConfirm}>
            <motion.div layout className={styles.dateSelected}>
              {selectedDate}
            </motion.div>
            {isConfirmed ? (
              <motion.div
                layout
                initial="initial"
                animate="animate"
                variants={appearUpAnimation}
                transition="transition"
              >
                Confirmed
                <span role="img" aria-label="green check mark emoji">
                  ✅
                </span>
                <span role="img" aria-label="party hat emoji">
                  🥳
                </span>
              </motion.div>
            ) : (
              <motion.button
                layout
                whileHover={{ scale: 1.1 }}
                onTap={() => {
                  setEnabled(false);
                  setConfirmed(true);
                }}
                aria-expanded={isDateSelected}
              >
                Confirm
              </motion.button>
            )}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={styles.dateNotSelected}
          >
            Please Select A Date
          </motion.div>
        )}
      </div>
      <Calendar
        onClickDay={(value) => {
          let clickedDate = value.toString().substring(0, 15);
          if (isEnabled) {
            setDate(clickedDate);
          }
          setDateSelected(true);
        }}
      />
    </motion.div>
  );
};

export default Booking;
