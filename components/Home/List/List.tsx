import React from 'react';
import moment from 'moment';
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
            <div style={{ marginLeft: '1rem', marginTop: '1rem' }}>
              Last updated:{' '}
              {moment
                .utc(post.updated)
                .local()
                .format('lll')}
            </div>
          </PostContainer>
        );
      })}
      {posts.length <= 0 && <div>No Items</div>}
    </Wrapper>
  );
};

export default List;
