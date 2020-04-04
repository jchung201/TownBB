import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const GetPost = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>
        <h1>Post id: {id}</h1>
      </div>
    </Layout>
  );
};

export default GetPost;
