import React from 'react';
import moment from 'moment';
import { Wrapper } from './listStyled';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  postItem: {
    display: 'flex',
    marginTop: 20,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    margin: 10,
  },
}));

const List = () => {
  const classes = useStyles();
  const posts = useSelector(state => state.home.posts);
  return (
    <Wrapper>
      {posts.map(post => {
        return (
          <Card className={classes.postItem} key={post.id}>
            <CardMedia
              className={classes.cover}
              image="https://cms.prod.nypr.digital/images/297736/fill-661x496/"
              title="Live from space album cover"
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
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
    </Wrapper>
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
