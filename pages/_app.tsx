import React from 'react';
import Head from 'next/head';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '../components/styled/theme';
import '../public/styles/main.css';
import Layout from '../components/Layout';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
            rel="stylesheet"
          />
          <title>TownBB | Classifieds</title>
        </Head>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default MyApp;
