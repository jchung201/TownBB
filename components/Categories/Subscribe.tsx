import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { API_URL } from '../../utilities/envUrl';
import notify from '../../utilities/notify';
import {
  List,
  ListSubheader,
  TextField,
  Button,
  ListItem,
} from '@material-ui/core';

const Subscribe = () => {
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
    <div>
      {email}
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            style={{ color: 'white', fontSize: '1.5em' }}
          >
            Subscribe to{' '}
            {id &&
              String(id)
                .split('_')
                .join(' ')}
          </ListSubheader>
        }
        style={{
          width: '90%',
          backgroundColor: '#3f51b5',
          color: 'white',
          textAlign: 'center',
          paddingBottom: 0,
        }}
      >
        <ListItem style={{ paddingLeft: '0.6em', paddingRight: '0.6em' }}>
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
        </ListItem>
      </List>
    </div>
  );
};

export default Subscribe;
