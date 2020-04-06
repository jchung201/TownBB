import React from 'react';
import HomeContainer from '../components/Home/HomeContainer/HomeContainer';
import { getPosts, getCategories, getLocation } from '../store/home/home.GIP';
const Home = () => {
  return <HomeContainer />;
};

Home.getInitialProps = async ({ store }) => {
  store.dispatch(await getCategories());
  store.dispatch(await getLocation());
  store.dispatch(await getPosts());
};

export default Home;
