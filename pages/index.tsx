import React from 'react';
import HomeContainer from '../components/Home/HomeContainer';
import { getPosts, getCategories, getLocation } from '../store/home/home.GIP';
import { setCategoryAction, setTypeAction } from '../store/home/homeActions';
const Home = () => {
  return <HomeContainer />;
};

Home.getInitialProps = async ({ store }) => {
  store.dispatch(await getCategories());
  store.dispatch(await getLocation());
  store.dispatch(await getPosts());
  store.dispatch(setCategoryAction(null));
  store.dispatch(setTypeAction('All'));
};

export default Home;
