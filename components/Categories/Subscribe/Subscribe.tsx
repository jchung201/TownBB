import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import axios from 'axios';
import { API_URL } from '../../../utilities/envUrl';
import {
  Wrapper,
  Header,
  Title,
  Main,
  EmailInput,
  Submit,
} from './subscribeStyled';

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
      // notify success
      this.setState({ email: '' });
    } catch (error) {
      //notify fail
      console.error(error);
    }
  };

  render() {
    const { email } = this.state;
    const { category } = this.props;
    return (
      <Wrapper>
        <Header>
          <Title>Subscribe to {category}</Title>
        </Header>
        <Main onSubmit={this.onSubmit}>
          <EmailInput
            placeholder="Input your Email"
            onChange={this.onChangeEmail}
            value={email}
          />
          <Submit onClick={this.onSubmit}>Subscribe</Submit>
        </Main>
      </Wrapper>
    );
  }
}

export default connector(Subscribe);
