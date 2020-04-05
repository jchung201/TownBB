import React from 'react';
import { Wrapper, Main, SideBar } from './homeContainerStyled';
import FilterBar from '../FilterBar/FilterBar';
import List from '../List/List';
import Categories from '../Categories/Categories';

const HomeContainer = () => {
  return (
    <Wrapper>
      <Main>
        <FilterBar />
        <List />
      </Main>
      <SideBar>
        <Categories />
      </SideBar>
    </Wrapper>
  );
};

export default HomeContainer;
