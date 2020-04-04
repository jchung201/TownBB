import React from 'react';
import { Wrapper } from '../List/listStyled';
import FilterBar from '../FilterBar/FilterBar';
import List from '../List/List';
import Categories from '../Categories/Categories';

const HomeContainer: React.FC = () => {
  return (
    <Wrapper>
      <div>
        <FilterBar />
        <List />
      </div>
      <Categories />
    </Wrapper>
  );
};

export default HomeContainer;
