import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

const List = () => {
  const posts = useSelector(state => state.home.posts);
  return (
    <div>
      {posts.map(post => {
        return (
          <Card style={{ display: 'flex', marginTop: '2em' }} key={post.id}>
            <CardMedia
              style={{ width: '10em', margin: '1em' }}
              image="https://cms.prod.nypr.digital/images/297736/fill-661x496/"
              title="Live from space album cover"
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent style={{ flex: '1 0 auto' }}>
                <Typography component="h5" variant="h5">
                  {post.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {post.description.substring(0, 80) + '...'}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Last updated:{' '}
                  {moment
                    .utc(post.updated)
                    .local()
                    .format('lll')}
                </Typography>
              </CardContent>
            </div>
          </Card>
        );
      })}
      {posts.length <= 0 && <div>No Items</div>}
    </div>
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
