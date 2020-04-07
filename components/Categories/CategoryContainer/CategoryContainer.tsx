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
        <CategoryLabel>
          Filtered by {category}
          &nbsp; &nbsp;
          <Link href="/">
            <Back>go back</Back>
          </Link>
        </CategoryLabel>
        <FilterBar />
        <List />
      </Main>
      <SideBar>
        <Subscribe />
      </SideBar>
    </Wrapper>
  );
};

export default CategoryContainer;
