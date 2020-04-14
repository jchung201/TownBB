import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { API_URL } from '../../utilities/envUrl';
import notify from '../../utilities/notify';
import {
  Card,
  CardContent,
  CardHeader,
  Button,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  cardHeader: {
    width: '90%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

const Subscribe = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const router = useRouter();
  const {
    query: { id },
  } = router;
  const onSubmit = async event => {
    event.preventDefault();
    try {
      await axios.post(`${API_URL}/rest/subs`, {
        email,
        category: id,
      });
      notify('success', 'Email subscribed!');
      setEmail('');
    } catch (error) {
      notify('error', 'Issue with subscription!');
      console.error(error);
    }
  };
  return (
    <div style={{ marginTop: '2em', width: '100%' }}>
      <Card className={classes.cardHeader}>
        <CardHeader
          title="Subscribe"
          subheader={`to ${String(id)
            .split('_')
            .join(' ')}`}
          titleTypographyProps={{ align: 'center' }}
          subheaderTypographyProps={{ align: 'center', color: 'inherit' }}
          style={{ backgroundColor: '#3f51b5', color: 'white' }}
        />
        <CardContent>
          <form
            noValidate
            autoComplete="off"
            onSubmit={onSubmit}
            style={{
              width: '100%',
              color: 'white',
              paddingTop: '1em',
              paddingBottom: '1.5em',
              backgroundColor: 'white',
              textAlign: 'center',
            }}
          >
            <TextField
              onChange={e => setEmail(e.target.value)}
              id="standard-basic"
              label="Email"
              value={email}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={onSubmit}
              type="submit"
              style={{
                marginTop: '1.5em',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Subscribe
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Subscribe;
