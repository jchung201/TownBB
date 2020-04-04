import React from 'react';
import Link from 'next/link';
import { Wrapper } from './categoriesStyled';

const TopCategories: React.FC = () => {
  return (
    <Wrapper>
      Categories List
      <div>
        <Link href="/categories">
          <a href="/categories">categories</a>
        </Link>
      </div>
    </Wrapper>
  );
};

export default TopCategories;
