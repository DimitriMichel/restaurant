import React from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import '../styles.css';

// This default export is required in a new `pages/_app.js` file.
// This page is used for Global SASS & CSS Styling
export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}
