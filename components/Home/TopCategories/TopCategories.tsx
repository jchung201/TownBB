import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import {
  Wrapper,
  Header,
  Title,
  CategoryItem,
  CategoryLabel,
} from './topCategoriesStyled';

const TopCategories = () => {
  const categories = useSelector(state => state.home.categories);
  return (
    <Wrapper>
      <Header>
        <Title>Popular Categories</Title>
      </Header>
      <div>
        {categories.map(category => {
          return (
            <CategoryItem key={category}>
              <Link href="/categories/[id]" as={`/categories/${category}`}>
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
