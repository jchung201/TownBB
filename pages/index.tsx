import React from 'react';
import HomeContainer from '../components/Home/HomeContainer/HomeContainer';
import {
  getCategories,
  getLocation,
  getPosts,
} from '../store/home/homeActions';

const Home = () => {
  return <HomeContainer />;
};

Home.getInitialProps = async ({ store }) => {
  store.dispatch(await getCategories());
  store.dispatch(await getLocation());
  store.dispatch(await getPosts());
};

export default Home;
