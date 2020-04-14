import Head from 'next/head';
import App, { AppContext } from 'next/app';
import React from 'react';
// Redux
import { Provider as StoreProvider } from 'react-redux';
import withRedux, { ReduxWrapperAppProps } from 'next-redux-wrapper';
import { makeStore, RootState } from '../store/index';
// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
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
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>TownBB | Local Jobs</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <StoreProvider store={store}>
          <ThemeProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
              <ToastContainer />
            </Layout>
          </ThemeProvider>
        </StoreProvider>
      </React.Fragment>
    );
  }
}

export default withRedux(makeStore)(MyApp);
