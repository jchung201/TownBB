import React, { useState, Fragment } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

const List = () => {
  const posts = useSelector(state => state.home.posts);
  const router = useRouter();
  const [postId, setPost] = useState('');
  if (postId) {
    router.push(`/posts/${postId}`);
  }
  return (
    <Fragment>
      {posts.map(post => {
        return (
          <Card
            style={{ display: 'flex', marginTop: '2em', cursor: 'pointer' }}
            key={post.id}
            onClick={() => {
              setPost(post.id);
            }}
          >
            <CardMedia
              style={{ minWidth: '6em', width: '6em', margin: '1em' }}
              image="https://cms.prod.nypr.digital/images/297736/fill-661x496/"
              title="Live from space album cover"
            />
            <CardContent style={{ flex: '1 0 auto' }}>
              <Typography component="h5" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.description.substring(0, 40) + '...'}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Last updated:{' '}
                {moment
                  .utc(post.updated)
                  .local()
                  .format('lll')}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
      {posts.length <= 0 && <div>No Items</div>}
    </Fragment>
  );
};

export default List;

{
  /* <PostContainer key={post.id}>
<PostTitle>Title: {post.title}</PostTitle>
<PostDescription>Description: {post.description}</PostDescription>
<div style={{ marginLeft: '1rem', marginTop: '1rem' }}>
  
</div>
</PostContainer> */
}
