import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Wrapper,
  Header,
  Title,
  CategoryItem,
  CategoryLabel,
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
      <div>Input your email</div>
    </Wrapper>
  );
};

export default Subscribe;
