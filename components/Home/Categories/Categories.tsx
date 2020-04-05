import React from 'react';
import Link from 'next/link';
import {
  Wrapper,
  Header,
  Title,
  CategoryItem,
  CategoryLabel,
} from './categoriesStyled';

const TopCategories = () => {
  const categories = ['Sushi', 'pizza', 'Magenta'];
  return (
    <Wrapper>
      <Header>
        <Title>Popular Categories</Title>
      </Header>
      <div>
        {categories.map(category => {
          return (
            <CategoryItem key={category}>
              <Link href="/categories">
                <CategoryLabel>{category}</CategoryLabel>
              </Link>
            </CategoryItem>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default TopCategories;
