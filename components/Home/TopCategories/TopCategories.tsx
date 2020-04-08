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
import { CATEGORY_NAMES } from '../../../utilities/categories';

const TopCategories = () => {
  const categories = useSelector(state => state.home.categories);

  return (
    <Wrapper>
      <Header>
        <Title>All Categories</Title>
      </Header>
      <div>
        {CATEGORY_NAMES.map(category => {
          return (
            <CategoryItem key={category.id}>
              <Link href="/categories/[id]" as={`/categories/${category.name}`}>
                <CategoryLabel>{category.id}</CategoryLabel>
              </Link>
            </CategoryItem>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default TopCategories;
