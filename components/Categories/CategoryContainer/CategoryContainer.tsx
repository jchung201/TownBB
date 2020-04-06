import React from 'react';
import { Wrapper, Main, SideBar } from './categoryContainerStyled';
import FilterBar from '../../Home/FilterBar/FilterBar';
import List from '../../Home/List/List';
import Subscribe from '../Subscribe/Subscribe';

const CategoryContainer = () => (
  <Wrapper>
    <Main>
      <FilterBar />
      <List />
    </Main>
    <SideBar>
      <Subscribe />
    </SideBar>
  </Wrapper>
);

export default CategoryContainer;
