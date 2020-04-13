import React from 'react';
import { getPosts, getLocation } from '../../store/home/home.GIP';
import CategoryContainer from '../../components/Categories/CategoryContainer';
import { setCategoryAction } from '../../store/home/homeActions';

const GetPost = () => {
  return <CategoryContainer />;
};

GetPost.getInitialProps = async ({ store, query: { slug } }) => {
  store.dispatch(await getLocation());
  const category = slug.length > 1 ? slug[1] : slug[0];
  store.dispatch(await getPosts({ category }));
  store.dispatch(setCategoryAction(category));
};

export default GetPost;
