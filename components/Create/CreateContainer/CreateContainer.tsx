import React from 'react';
import {
  Wrapper,
  Main,
  SearchInput,
  LocationInput,
  SubmitButton,
} from './createContainerStyled';

const CreateContainer = () => (
  <Wrapper>
    <Main>
      <SearchInput type="text" placeholder="Title" required="" />
      <LocationInput type="text" placeholder="Description" required="" />
      <SubmitButton>Create Posting!</SubmitButton>
    </Main>
  </Wrapper>
);

export default CreateContainer;
