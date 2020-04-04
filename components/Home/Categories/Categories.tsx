import React from 'react';
import Link from 'next/link';
import { Wrapper, Header, Title } from './categoriesStyled';

const TopCategories: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <Title>Popular Categories</Title>
      </Header>
      <div>
        <Link href="/categories">
          <a href="/categories">categories</a>
        </Link>
      </div>
    </Wrapper>
  );
};

export default TopCategories;
