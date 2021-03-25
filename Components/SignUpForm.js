import React, { useState } from 'react';
import styles from './Newsletter.module.css';
import { AnimateSharedLayout, motion } from 'framer-motion';

//Animation Config
const appearUpAnimation = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 1, transition: { delay: 0.3 } },
};

const SignUpForm = () => {
  const [isSubmitted, setSubmit] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const onNameChange = (event) => {
    setNameValue(event.target.value);
  };
  const onEmailChange = (event) => {
    setEmailValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={appearUpAnimation}
      transition="transition"
    >
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          <span className={styles.labelName}>Name</span>
          <input
            placeholder="'John Smith'"
            className={styles.signUp}
            value={nameValue}
            onChange={onNameChange}
          />
        </label>
        <label>
          <span className={styles.labelName}>Email</span>
          <input
            type="email"
            placeholder="'john.smith@email.com'"
            className={styles.signUp}
            value={emailValue}
            onChange={onEmailChange}
          />
        </label>
        <div className={styles.submitContainer}>
          <AnimateSharedLayout>
            <motion.div layout onHover={{ scale: 1.1 }}>
              <input
                className={styles.submitButton}
                type="submit"
                value={isSubmitted? ('Submitted'): ('Submit') }
                onClick={() => {
                  setSubmit(true);
                }}
                disabled={isSubmitted}
              />
            </motion.div>
            <div className={styles.submitEmojiContainer}>
              {isSubmitted && (
                <motion.span
                  className={styles.submitEmoji}
                  layout
                  initial="initial"
                  animate="animate"
                  variants={appearUpAnimation}
                  transition="transition"
                  role="img"
                  aria-label="check mark emoji"
                >
                  👍
                </motion.span>
              )}
            </div>
          </AnimateSharedLayout>
        </div>
      </form>
    </motion.div>
  );
};
export default SignUpForm;
