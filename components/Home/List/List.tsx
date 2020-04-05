import React from 'react';
import { Wrapper } from './listStyled';
import { useSelector } from 'react-redux';

const List = () => {
  const posts = useSelector(state => state.home.posts);
  return (
    <Wrapper>
      Categories List
      <div>
        {posts.map(post => {
          return <div key={post.id}>{post.title}</div>;
        })}
      </div>
    </Wrapper>
  );
};

export default List;
