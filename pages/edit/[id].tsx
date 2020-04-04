import React from 'react';
import { useRouter } from 'next/router';

const EditPost = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>Edit id: {id}</h1>
    </div>
  );
};

export default EditPost;
