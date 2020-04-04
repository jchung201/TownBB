import React from 'react';
import { useRouter } from 'next/router';

const GetPost = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>Post id: {id}</h1>
    </div>
  );
};

export default GetPost;
