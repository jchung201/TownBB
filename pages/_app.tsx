import React from 'react';
import Head from 'next/head';
export default ({ Component, pageProps }) => (
  <React.Fragment>
    <Head>
      <link rel="manifest" href="/manifest.json" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>TownBB | Classifieds</title>
    </Head>
    <Component {...pageProps} />
  </React.Fragment>
);
