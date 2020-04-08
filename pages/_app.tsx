import Head from 'next/head';
import App, { AppContext } from 'next/app';
import React from 'react';
// Redux
import { Provider as StoreProvider } from 'react-redux';
import withRedux, { ReduxWrapperAppProps } from 'next-redux-wrapper';
import { makeStore, RootState } from '../store/index';
// Themes
import { ThemeProvider } from 'styled-components';
import theme from '../utilities/theme';
// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Layout Component
import Layout from '../components/Layout/Layout';

class MyApp extends App<ReduxWrapperAppProps<RootState>> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <React.Fragment>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <title>TownBB | Classifieds</title>
        </Head>
        <ThemeProvider theme={theme}>
          <Layout>
            <StoreProvider store={store}>
              <Component {...pageProps} />
            </StoreProvider>
          </Layout>
        </ThemeProvider>
        <ToastContainer />
      </React.Fragment>
    );
  }
}

export default withRedux(makeStore)(MyApp);
