import React from 'react';
import { NextPage } from 'next';
import HomeContainer from '../components/Home/HomeContainer/HomeContainer';
import { getCategories } from '../store/home/homeReducer';

interface Props {
  custom: string;
}

const Home: NextPage<Props> = () => {
  return <HomeContainer />;
};

Home.getInitialProps = async ({ store, isServer }) => {
  store.dispatch(await getCategories());
  return { custom: 'custom' };
};

export default Home;
