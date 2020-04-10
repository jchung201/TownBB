import React from 'react';
import FilterBar from '../FilterBar/FilterBar';
import List from '../List/List';
import TopCategories from '../TopCategories/TopCategories';
import { Grid, Hidden } from '@material-ui/core';

const HomeContainer = () => {
  return (
    <Grid container spacing={3} direction="row">
      <Grid item xs={12}>
        <Hidden smUp>New Category</Hidden>
      </Grid>
      <Grid item xs={12} sm={9}>
        <FilterBar />
        <List />
      </Grid>

      <Grid item sm={3}>
        <Hidden xsDown>
          <TopCategories />
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default HomeContainer;
