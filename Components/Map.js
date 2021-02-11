import React from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';
import { icon } from 'leaflet';

const ICON = icon({
  iconUrl: '/marker.png',
  iconSize: [32, 32],
});
const position = [42.349908, -71.079819];

const Map = () => {
  return (
    <div id="visit" className={styles.panelsContainer}>
      <div className={styles.imagePanel}>
        <MapContainer
          center={position}
          zoom={14}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/dimitrimichel/ckjcaeai46nmg19s8gcongozh/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`}
          />
          <Marker icon={ICON} position={position}>
            <Popup>Scoops!.</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className={styles.panelTextContainer}>
        <div className={styles.panelText}>
          <div className={styles.thanks}>
            <h2>Visit Us!</h2>
            <div className={styles.magazine}>-</div>
          </div>
          <p>
            Come down to our Back Bay, Boston location we'd love to have you,
            and you can try some of our amazing flavors.
          </p>
          <div className={styles.magazine}>-</div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Map;
