import React from 'react';
import FilterBar from '../FilterBar/FilterBar';
import List from '../List/List';
import TopCategories from '../TopCategories/TopCategories';
import { Grid } from '@material-ui/core';

const HomeContainer = () => {
  return (
    <Grid container spacing={3} direction="row">
      <Grid item xs={9}>
        <FilterBar />
        <List />
      </Grid>
      <Grid item xs={3}>
        <TopCategories />
      </Grid>
    </Grid>
  );
};

export default HomeContainer;
