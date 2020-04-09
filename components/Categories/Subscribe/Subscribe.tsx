import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import axios from 'axios';
import { API_URL } from '../../../utilities/envUrl';
import notify from '../../../utilities/notify';
import { List, ListSubheader, TextField, Button } from '@material-ui/core';

const mapStateToProps = ({ home: { category } }) => ({
  category,
});

const connector = connect(mapStateToProps, null);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface OwnState {
  email: string;
}

class Subscribe extends Component<PropsFromRedux, OwnState> {
  state = {
    email: '',
  };
  onChangeEmail = event => {
    const {
      target: { value },
    } = event;
    this.setState({ email: value });
  };
  onSubmit = async event => {
    event.preventDefault();
    const { category } = this.props;
    try {
      const { email } = this.state;
      await axios.post(`${API_URL}/rest/subs`, {
        email,
        category,
      });
      notify('success', 'Email subscribed!');
      // notify success
      this.setState({ email: '' });
    } catch (error) {
      notify('error', 'Issue with subscription!');
      //notify fail
      console.error(error);
    }
  };

  render() {
    const { email } = this.state;
    const { category } = this.props;
    return (
      <div>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              style={{ color: 'white', fontSize: '1.5em' }}
            >
              Subscribe to {category && category.split('_').join(' ')}
            </ListSubheader>
          }
          style={{
            width: '90%',
            maxWidth: 360,
            backgroundColor: '#3f51b5',
            color: 'white',
            textAlign: 'center',
          }}
        ></List>
        <form
          noValidate
          autoComplete="off"
          onSubmit={this.onSubmit}
          style={{
            color: 'white',
            paddingTop: '1em',
            paddingBottom: '1.5em',
            border: '0.2em solid #3f51b5',
            width: '90%',
            backgroundColor: 'white',
            textAlign: 'center',
          }}
        >
          <TextField
            onChange={this.onChangeEmail}
            id="standard-basic"
            label="Email"
            value={email}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={this.onSubmit}
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
      </div>
    );
  }
}

export default connector(Subscribe);
