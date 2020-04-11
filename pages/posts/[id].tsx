import React from 'react';
import { getPost } from '../../store/home/home.GIP';
import Post from '../../components/Post/Post';

const GetPost = () => {
  return <Post />;
};

GetPost.getInitialProps = async ({ store, query }) => {
  const { id } = query;
  store.dispatch(await getPost({ id }));
};

export default GetPost;
