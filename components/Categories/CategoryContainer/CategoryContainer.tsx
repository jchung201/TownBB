import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { CategoryLabel, Back } from './categoryContainerStyled';
import { Grid } from '@material-ui/core';

import FilterBar from '../../Home/FilterBar/FilterBar';
import List from '../../Home/List/List';
import Subscribe from '../Subscribe/Subscribe';

const CategoryContainer = () => {
  const category = useSelector(state => state.home.category);
  return (
    <Grid container spacing={3} direction="row">
      <Grid item xs={9}>
        <CategoryLabel>
          Filtered by {category && category.split('_').join(' ')}
          &nbsp; &nbsp;
          <Link href="/">
            <Back>go back</Back>
          </Link>
        </CategoryLabel>
        <FilterBar />
        <List />
      </Grid>
      <Grid item xs={3}>
        <Subscribe />
      </Grid>
    </Grid>
  );
};

export default CategoryContainer;
