import React from 'react';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import moment from 'moment';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Breadcrumbs,
  Typography,
  Link,
} from '@material-ui/core';
import {
  CategoryLabel,
  Back,
} from '../Categories/CategoryContainer/categoryContainerStyled';

const Post = () => {
  const post = useSelector(state => state.home.post);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10em',
      }}
    >
      <CategoryLabel>
        <Back
          onClick={() => {
            Router.back();
          }}
        >
          go back
        </Back>
      </CategoryLabel>
      <Card style={{ width: '80%' }}>
        <CardActionArea>
          <CardMedia
            image={post.images[0]}
            title="Post image"
            style={{ paddingTop: '56.25%' }}
          />
          <CardContent>
            <Breadcrumbs aria-label="breadcrumb" component="span">
              {post.categories.map(category => {
                return (
                  <Link key={category} href="/">
                    {category}
                  </Link>
                );
              })}
            </Breadcrumbs>
            <Typography gutterBottom variant="h5" component="h2">
              {post.title}{' '}
              <span>
                <Chip label={post.location} variant="outlined" />
              </span>
            </Typography>
            <Typography gutterBottom variant="h6" component="h4">
              {post.value}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Last updated{' '}
              {moment
                .utc(post.updated)
                .local()
                .format('lll')}
            </Typography>
          </CardContent>
        </CardActionArea>
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
