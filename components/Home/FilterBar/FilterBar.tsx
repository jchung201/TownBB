import React from 'react';
import {
  Wrapper,
  SearchInput,
  LocationInput,
  SubmitButton,
} from './filterBarStyled';

const FilterBar = () => {
  return (
    <Wrapper
      onKeyPress={e => {
        e.key === 'Enter' && console.log('hi');
      }}
    >
      <SearchInput type="text" placeholder="Search" required="" />
      <LocationInput placeholder="Location" />
      <SubmitButton>Search</SubmitButton>
    </Wrapper>
  );
};

export default FilterBar;
