import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import {
  Wrapper,
  Main,
  SideBar,
  CategoryLabel,
  Back,
} from './categoryContainerStyled';
import FilterBar from '../../Home/FilterBar/FilterBar';
import List from '../../Home/List/List';
import Subscribe from '../Subscribe/Subscribe';

const CategoryContainer = () => {
  const category = useSelector(state => state.home.category);

  return (
    <Wrapper>
      <Main>
        <FilterBar />
        <CategoryLabel>
          Filtered by {category}
          &nbsp; &nbsp;
          <Link href="/">
            <Back>Go Back</Back>
          </Link>
        </CategoryLabel>
        <List />
      </Main>
      <SideBar>
        <Subscribe />
      </SideBar>
    </Wrapper>
  );
};

export default CategoryContainer;
