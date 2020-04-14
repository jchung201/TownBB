import React from 'react';
import axios from 'axios';
import Error from 'next/error';

import { API_URL } from '../../utilities/envUrl';
import Unsub from '../../components/Unsub/Unsub';

const UnSub = ({ sub, err }) => {
  if (err) return <Error statusCode={err.statusCode} />;
  return <Unsub sub={sub} />;
};

UnSub.getInitialProps = async ({ query: { slug } }) => {
  try {
    const hash = slug[1];
    const unSub = await axios.delete(
      `${API_URL}/rest/subs/${slug[0]}?hash=${hash}`,
    );
    return {
      sub: unSub.data,
    };
  } catch (error) {
    return {
      err: {
        statusCode: 401,
      },
    };
  }
};

export default UnSub;
