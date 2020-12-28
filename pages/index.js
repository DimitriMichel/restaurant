import React from 'react';
import { useInView } from 'react-intersection-observer'
import Menu from '../Components/Menu';
import styles from './index.module.css';
import Hero from '../Components/Hero';
import Social from '../Components/Social';
import Info from '../Components/Info';
import Party from '../Components/Party';
import Discover from '../Components/Discover';
import Banner from '../Components/Banner';
const Home = () => {

  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
    <div className={styles.container}>
      <Hero />
      <Info/>
      <Party/>
      <Discover/>
      <Banner/>
    </div>
  );
};

export default Home;
