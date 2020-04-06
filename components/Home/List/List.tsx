import React from 'react';
import { Wrapper } from './listStyled';
import { useSelector } from 'react-redux';
import { PostContainer, PostTitle, PostDescription } from './listStyled';

const List = () => {
  const posts = useSelector(state => state.home.posts);
  return (
    <Wrapper>
      {posts.map(post => {
        return (
          <PostContainer key={post.id}>
            <PostTitle>Title: {post.title}</PostTitle>
            <PostDescription>Description: {post.description}</PostDescription>
          </PostContainer>
        );
      })}
    </Wrapper>
  );
};

export default List;
