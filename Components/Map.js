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
const position = [51.505, -0.09];

const Map = () => {
  return (
    <div className={styles.information}>
      <div className={styles.iceCreamImage}>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/dimitrimichel/ckjcaeai46nmg19s8gcongozh/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`}
          />
          <Marker icon={ICON} position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className={styles.infoTextContainer}>
        <div className={styles.infoText}>
          <div className={styles.thanks}>
            <br />-
          </div>

          <p>
            Give Us A Visit!
            <br />
            <br />
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
