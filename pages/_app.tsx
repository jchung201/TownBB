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
import '../public/styles/main.css';
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
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
            rel="stylesheet"
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
      </React.Fragment>
    );
  }
}

export default withRedux(makeStore)(MyApp);
