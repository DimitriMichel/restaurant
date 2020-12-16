import React from 'react';
import Menu from '../Components/Menu';
import styles from './index.module.css';
import Hero from '../Components/Hero';
import Social from '../Components/Social';
import Info from '../Components/Info';
import Party from '../Components/Party';
const Home = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Info/>
      <Party/>
    </div>
  );
};

export default Home;
