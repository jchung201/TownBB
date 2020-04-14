import React from 'react';
import { getPosts, getLocation } from '../../store/home/home.GIP';
import CategoryContainer from '../../components/Categories/CategoryContainer';
import { setCategoryAction } from '../../store/home/homeActions';

const GetPost = () => {
  return <CategoryContainer />;
};

GetPost.getInitialProps = async ({ store, query: { id } }) => {
  store.dispatch(await getLocation());
  store.dispatch(await getPosts({ category: id }));
  store.dispatch(setCategoryAction(id));
};

export default GetPost;
