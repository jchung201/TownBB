import React from 'react';
import { getPosts, getLocation } from '../../store/home/home.GIP';
import CategoryContainer from '../../components/Categories/CategoryContainer/CategoryContainer';
import { setCategoryAction } from '../../store/home/homeActions';

const GetPost = () => {
  return <CategoryContainer />;
};

GetPost.getInitialProps = async ({ store, query: { slug } }) => {
  store.dispatch(await getLocation());
  store.dispatch(await getPosts({ category: slug[0] }));
  store.dispatch(setCategoryAction(slug[0]));
};

export default GetPost;
