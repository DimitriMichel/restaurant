import React, { useState } from 'react';
import styles from './Party.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import DatePicker from 'react-datepicker/';
import setHours from 'date-fns/setSeconds';
import setMinutes from 'date-fns/setMinutes';
import Link from 'next/link';
const BookingView = () => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 60), 17)
  );
  return (
    <motion.div
      className={styles.infoTextContainer}
      variants={appearUpAnimation}
      initial="initial"
      animate="animate"
      transition="transition"
    >
      <div className={styles.infoText}>
        <div className={styles.thanks}>
          <br />-
        </div>
        <h4>Pick A Date!</h4>
        <br />
        DATE
        <div className={styles.magazine}>-</div>
        <br />
      </div>
    </motion.div>
  );
};

const Booking = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Hi
    </motion.div>
  );
};

export default Booking;
