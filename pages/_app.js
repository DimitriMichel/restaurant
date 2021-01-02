import React from 'react';
import {AnimatePresence} from 'framer-motion';
import '../styles.css';
// This default export is required in a new `pages/_app.js` file.
// This page is used for Global SASS & CSS Styling
export default function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}
