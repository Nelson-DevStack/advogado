/* eslint-disable react/react-in-jsx-scope */
import '../styles/globals.css';
import type { AppProps } from 'next/app';

import ScrollObserver from '../contexts/scrollObserver';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ScrollObserver>
        <Component {...pageProps} />
      </ScrollObserver>
    </>
  );
}

export default MyApp;
