import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Link from 'next/link';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Breadcrumbs,
  Typography,
} from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/Business';

const Post = () => {
  const post = useSelector(state => state.home.post);
  if (!post) return <div>Loading...</div>;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '5em',
        marginTop: '3em',
      }}
    >
      <Card style={{ width: '80%' }}>
        <CardMedia
          image={
            post.images.length > 0
              ? post.images[0]
              : 'https://farmhouseguide.com/wp-content/uploads/2020/01/farm-geese-relaxing-in-a-field.jpg'
          }
          title="Post image"
          style={{ paddingTop: '56.25%' }}
        />
        <CardContent>
          <Breadcrumbs aria-label="breadcrumb" component="span">
            <Link href="/categories/[id]" as={`/categories/${post.category}`}>
              <a
                href={`/categories/${post.category}`}
                style={{ color: 'inherit', textDecoration: 'none' }}
                onClick={e => event.stopPropagation()}
              >
                {post.category.split('_').join(' ')}
              </a>
            </Link>
            {post.type && (
              <Typography variant="body2" color="textSecondary" component="p">
                {post.type.split('_').join(' ')}
              </Typography>
            )}
          </Breadcrumbs>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          {post.company && (
            <Chip
              icon={<BusinessIcon />}
              label={post.company}
              style={{ marginRight: '1em' }}
            />
          )}
          <span>
            <Chip label={post.location} variant="outlined" />
          </span>
          <Typography
            gutterBottom
            variant="h6"
            component="h4"
            style={{ marginTop: '0.5em' }}
          >
            {post.value}
          </Typography>
          <Typography variant="body2" component="p">
            {post.description}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ marginTop: '0.5em' }}
          >
            Last updated{' '}
            {moment
              .utc(post.updated)
              .local()
              .format('lll')}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            href={`mailto: ${post.contactEmail}`}
          >
            E-Mail Poster
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
