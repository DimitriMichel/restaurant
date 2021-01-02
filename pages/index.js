import React from 'react';
import { useInView } from 'react-intersection-observer'
import dynamic from 'next/dynamic';
import styles from './index.module.css';
import Hero from '../Components/Hero';
import Info from '../Components/Info';
import Party from '../Components/Party';
import Discover from '../Components/Discover';
import Banner from '../Components/Banner';
import { motion, AnimatePresence } from "framer-motion"

const Home = () => {


  const Map = React.useMemo(() => dynamic(
    () => import('../Components/Map'),
    {
      loading: () => <p>A map is loading</p>,
      ssr: false // This line is important. It's what prevents server-side render
    }
  ), [])

  return (
    <AnimatePresence exitBeforeEnter>
    <div className={styles.container}>
      <Hero />
      <Info/>
      <Party/>
      <Banner/>
      <Map/>
    </div>
    </AnimatePresence>
  );
};

export default Home;
