import React, { useState, Fragment } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
} from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/Business';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const List = ({ width }) => {
  const posts = useSelector(state => state.home.posts);
  const type = useSelector(state => state.home.type);
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
  let finalPosts;
  if (type && type !== 'All') {
    finalPosts = posts.filter(post => {
      return post.type === type;
    });
  } else {
    finalPosts = posts;
  }
  return (
    <Fragment>
      {finalPosts.map(post => {
        return (
          <Card
            style={{ display: 'flex', marginTop: '2em', cursor: 'pointer' }}
            key={post.id}
            onClick={() => {
              setPost(post.id);
            }}
          >
            <CardMedia
              style={{
                minWidth: '8em',
                width: '8em',
                margin: '1em',
                paddingRight: '3em',
              }}
              image={
                post.images.length > 0
                  ? post.images[0]
                  : 'https://cms.prod.nypr.digital/images/297736/fill-661x496/'
              }
              title="Live from space album cover"
            />
            <CardContent style={{ flex: '1 0 auto' }}>
              <Typography
                component="h4"
                variant="h4"
                style={{ marginBottom: '0.2em' }}
              >
                {post.title}
              </Typography>
              {post.company && (
                <Chip
                  icon={<BusinessIcon />}
                  size="small"
                  label={post.company}
                  style={{ marginRight: '1em' }}
                />
              )}
              <span>
                <Chip label={post.location} size="small" variant="outlined" />
              </span>
              <Typography
                component="h6"
                variant="h6"
                style={{ marginTop: '0.2em' }}
              >
                {post.value}
              </Typography>
              <Typography variant="subtitle1">
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
      {posts.length <= 0 && (
        <Typography
          style={{ marginTop: '2em' }}
          color="secondary"
          variant="subtitle1"
        >
          Sorry, no items found.
        </Typography>
      )}
    </Fragment>
  );
};

export default withWidth()(List);
