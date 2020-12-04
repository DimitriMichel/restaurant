import React from 'react';
import Menu from '../Components/Menu';
import styles from './index.module.css';
import Hero from '../Components/Hero';
import Social from '../Components/Social';
const Home = () => {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
};

export default Home;
