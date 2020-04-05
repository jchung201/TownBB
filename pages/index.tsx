import React from 'react';
import HomeContainer from '../components/Home/HomeContainer/HomeContainer';
import { getCategories } from '../store/home/homeReducer';

const Home = () => {
  return <HomeContainer />;
};

Home.getInitialProps = async ({ store }) => {
  store.dispatch(await getCategories());
};

export default Home;
