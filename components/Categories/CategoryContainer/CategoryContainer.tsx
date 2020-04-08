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
import { CATEGORY_NAMES } from '../../../utilities/categories';

const CategoryContainer = () => {
  const category = useSelector(state => state.home.category);
  let realName;
  for (let i = 0; i < CATEGORY_NAMES.length; i++) {
    if (CATEGORY_NAMES[i].id === category) realName = CATEGORY_NAMES[i].name;
  }
  return (
    <Wrapper>
      <Main>
        <CategoryLabel>
          Filtered by {realName}
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
