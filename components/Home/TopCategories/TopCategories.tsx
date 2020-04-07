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
  const rawCategories = [
    { id: 'Jobs', value: 'jobs' },
    { id: 'For Sale', value: 'forSale' },
    { id: 'Housing', value: 'housing' },
    { id: 'Other', value: 'other' },
  ];
  return (
    <Wrapper>
      <Header>
        <Title>All Categories</Title>
      </Header>
      <div>
        {rawCategories.map(category => {
          return (
            <CategoryItem key={category.id}>
              <Link
                href="/categories/[id]"
                as={`/categories/${category.value}`}
              >
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
