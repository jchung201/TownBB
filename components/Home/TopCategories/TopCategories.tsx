import React from 'react';
import Link from 'next/link';
import {
  Wrapper,
  Header,
  Title,
  CategoryItem,
  CategoryLabel,
} from './topCategoriesStyled';
import { CATEGORY_NAMES } from '../../../utilities/categories';

const TopCategories = () => {
  return (
    <Wrapper>
      <Header>
        <Title>All Categories</Title>
      </Header>
      <div>
        {CATEGORY_NAMES.map(category => {
          return (
            <CategoryItem key={category.id}>
              <Link href="/categories/[id]" as={`/categories/${category.id}`}>
                <CategoryLabel>{category.name}</CategoryLabel>
              </Link>
            </CategoryItem>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default TopCategories;
