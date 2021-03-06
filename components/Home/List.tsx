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

const useStyles = makeStyles((theme) => ({
  listImage: {
    width: '12em',
    margin: '1em',
    [theme.breakpoints.down('sm')]: {
      width: '8em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '6em',
    },
  },
  listTitle: {
    marginBottom: '0.2em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.8em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1em',
    },
  },
  listChips: {
    [theme.breakpoints.down('sm')]: {
      width: '45%',
      height: '25%',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7em',
    },
  },
  listHeadline: {
    marginTop: '0.2em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8em',
    },
  },
  listDescription: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7em',
    },
  },
  listDate: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.6em',
    },
  },
}));

const List = ({ width }) => {
  const posts = useSelector((state) => state.home.posts);
  const type = useSelector((state) => state.home.type);
  const classes = useStyles();

  let descriptionWidth = 35;
  if (isWidthUp('lg', width)) {
    descriptionWidth = 80;
  } else if (isWidthUp('md', width)) {
    descriptionWidth = 50;
  } else if (isWidthUp('sm', width)) {
    descriptionWidth = 40;
  }
  let finalPosts;
  if (type && type !== 'All') {
    finalPosts = posts.filter((post) => {
      return post.type === type;
    });
  } else {
    finalPosts = posts;
  }
  return (
    <Fragment>
      {finalPosts.map((post) => {
        return (
          <Link href="/posts/[id]" as={`/posts/${post.id}`} key={post.id}>
            <a
              href={`/posts/${post.id}`}
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <Card
                style={{ display: 'flex', marginTop: '2em', cursor: 'pointer' }}
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
                <CardContent style={{ flex: '1 0 auto', width: '60%' }}>
                  <Typography
                    component="h4"
                    variant="h4"
                    className={classes.listTitle}
                  >
                    {post.title.substring(0, descriptionWidth) + '...'}
                  </Typography>
                  {post.company && (
                    <Chip
                      icon={<BusinessIcon />}
                      size="small"
                      className={classes.listChips}
                      label={post.company}
                      style={{ marginRight: '1em' }}
                    />
                  )}
                  <span>
                    <Chip
                      label={post.location}
                      size="small"
                      variant="outlined"
                      className={classes.listChips}
                    />
                  </span>
                  <Typography
                    component="h6"
                    variant="h6"
                    className={classes.listHeadline}
                  >
                    {post.value}
                  </Typography>
                  <Typography
                    className={classes.listDescription}
                    variant="subtitle1"
                  >
                    {post.description.substring(0, descriptionWidth) + '...'}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    className={classes.listDate}
                  >
                    Last updated:{' '}
                    {moment.utc(post.updated).local().format('lll')}
                  </Typography>
                </CardContent>
              </Card>
            </a>
          </Link>
        );
      })}
      {finalPosts.length <= 0 && (
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
