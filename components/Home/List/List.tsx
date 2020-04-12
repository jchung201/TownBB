import React, { useState, Fragment } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const List = ({ width }) => {
  const posts = useSelector(state => state.home.posts);
  const router = useRouter();
  const [postId, setPost] = useState('');
  if (postId) {
    router.push(`/posts/${postId}`);
  }
  let descriptionWidth = 35;
  if (isWidthUp('lg', width)) {
    descriptionWidth = 100;
  } else if (isWidthUp('md', width)) {
    descriptionWidth = 65;
  } else if (isWidthUp('sm', width)) {
    descriptionWidth = 55;
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
              style={{ minWidth: '8em', width: '8em', margin: '1em' }}
              image={
                post.images.length > 0
                  ? post.images[0]
                  : 'https://cms.prod.nypr.digital/images/297736/fill-661x496/'
              }
              title="Live from space album cover"
            />
            <CardContent style={{ flex: '1 0 auto' }}>
              <Typography component="h4" variant="h4">
                {post.title}
              </Typography>
              <Typography component="h6" variant="h6">
                {post.value}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.description.substring(0, descriptionWidth) + '...'}
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

export default withWidth()(List);
