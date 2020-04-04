import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
const EditPost = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>
        <h1>Edit id: {id}</h1>
      </div>
    </Layout>
  );
};

export default EditPost;
