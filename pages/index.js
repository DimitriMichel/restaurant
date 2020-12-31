import React from 'react';
import { useInView } from 'react-intersection-observer'
import Menu from '../Components/Menu';
import dynamic from 'next/dynamic';
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
  })//'../Components/Map'
  const Map = React.useMemo(() => dynamic(
    () => import('../Components/Map'), // replace '@components/map' with your component's location
    {
      loading: () => <p>A map is loading</p>,
      ssr: false // This line is important. It's what prevents server-side render
    }
  ), [/* list variables which should trigger a re-render here */])
  return (
    <div className={styles.container}>
      <Hero />
      <Info/>
      <Party/>

      <Banner/>
      <Map/>
    </div>
  );
};

export default Home;
