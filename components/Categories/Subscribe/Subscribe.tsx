import React from 'react';
import { useRouter } from 'next/router';
import {
  Wrapper,
  Header,
  Title,
  Main,
  EmailInput,
  Submit,
} from './subscribeStyled';

const Subscribe = () => {
  const {
    query: { id },
  } = useRouter();
  return (
    <Wrapper>
      <Header>
        <Title>Subscribe to {id}</Title>
      </Header>
      <Main>
        <EmailInput placeholder="Input your Email" />
        <Submit>Subscribe</Submit>
      </Main>
    </Wrapper>
  );
};

export default Subscribe;
