import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
const CustomApp = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>TownBB | Classifieds</title>
      </Head>
      <>
        <Component {...pageProps} />
      </>
    </React.Fragment>
  );
};

export default CustomApp;
