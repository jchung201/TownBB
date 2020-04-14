import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: '50%',
  },
  media: {
    height: '20%',
  },
});

const Unsub = ({ sub }) => {
  const classes = useStyles();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '5em',
        marginTop: '3em',
      }}
    >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://www.liveabout.com/thmb/GDGQlxkHk2LBgrCtJ_p4PYyp5Yw=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/duck-calling--studio-shot-134573694-59a6f88fd963ac0011c14399.jpg"
            title="Contemplative Reptile"
            style={{ paddingTop: '56.25%' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Unsubscribed!
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`You are successfully unsubscribed from ${sub.category
                .split('_')
                .join(' ')}`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link href="/">
            <Button component="a" size="small" color="primary">
              Go Home
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default Unsub;
