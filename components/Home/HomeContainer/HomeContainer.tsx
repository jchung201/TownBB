import React from 'react';
import { Wrapper, Main, SideBar } from './homeContainerStyled';
import FilterBar from '../FilterBar/FilterBar';
import List from '../List/List';
import TopCategories from '../TopCategories/TopCategories';

const HomeContainer = () => (
  <Wrapper>
    <Main>
      <FilterBar />
      <List />
    </Main>
    <SideBar>
      <TopCategories />
    </SideBar>
  </Wrapper>
);

export default HomeContainer;
