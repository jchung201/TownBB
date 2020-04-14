import React from 'react';
import CreateContainer from '../../components/Create/CreateContainer';
import axios from 'axios';
import Error from 'next/error';

const EditPost = ({ foundPost, err }) => {
  if (err) return <Error statusCode={err.statusCode} />;
  return <CreateContainer foundPost={foundPost} />;
};

EditPost.getInitialProps = async ({ query: { slug } }) => {
  try {
    const hash = slug[1];
    const foundPost = await axios.get(
      `http://localhost:3000/rest/ads/${slug[0]}/check`,
      {
        params: {
          hash,
        },
      },
    );
    return {
      foundPost: foundPost.data,
    };
  } catch (error) {
    return {
      err: {
        statusCode: 401,
      },
    };
  }
};

export default EditPost;
