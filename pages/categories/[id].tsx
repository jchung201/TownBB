import React from 'react';
import { getPosts, getLocation } from '../../store/home/home.GIP';
import CategoryContainer from '../../components/Categories/CategoryContainer/CategoryContainer';

const GetPost = () => {
  return <CategoryContainer />;
};

GetPost.getInitialProps = async ({ store, query: { id } }) => {
  store.dispatch(await getLocation());
  store.dispatch(await getPosts({ category: id }));
};

export default GetPost;
