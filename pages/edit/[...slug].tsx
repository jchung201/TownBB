import React from 'react';
import axios from 'axios';
import Error from 'next/error';

import CreateContainer from '../../components/Create/CreateContainer';
import { API_URL } from '../../utilities/envUrl';

const EditPost = ({ foundPost, err }) => {
  if (err) return <Error statusCode={err.statusCode} />;
  return <CreateContainer foundPost={foundPost} />;
};

EditPost.getInitialProps = async ({ query: { slug } }) => {
  try {
    const hash = slug[1];
    const foundPost = await axios.get(`${API_URL}/rest/ads/${slug[0]}/check`, {
      params: {
        hash,
      },
    });
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
