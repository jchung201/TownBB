import React, { Fragment } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
} from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/Business';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const useStyles = makeStyles(theme => ({
  listImage: {
    width: '12em',
    margin: '1em',
    paddingRight: '3em',
    [theme.breakpoints.down('sm')]: {
      width: '8em',
    },
  },
}));

const List = ({ width }) => {
  const posts = useSelector(state => state.home.posts);
  const type = useSelector(state => state.home.type);
  const classes = useStyles();

  let descriptionWidth = 35;
  if (isWidthUp('lg', width)) {
    descriptionWidth = 100;
  } else if (isWidthUp('md', width)) {
    descriptionWidth = 50;
  } else if (isWidthUp('sm', width)) {
    descriptionWidth = 40;
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
          <Link href={`/posts/${post.id}`} key={post.id}>
            <Card
              style={{ display: 'flex', marginTop: '2em', cursor: 'pointer' }}
              component="a"
            >
              <CardMedia
                className={classes.listImage}
                image={
                  post.images.length > 0
                    ? post.images[0]
                    : 'https://cms.prod.nypr.digital/images/297736/fill-661x496/'
                }
                title="Card Picture"
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
          </Link>
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
