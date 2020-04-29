import React from 'react';
import FilterBar from './FilterBar';
import List from './List';
import CategoryBar from './CategoryBar';
import MobileCategoryBar from './MobileCategoryBar';
import { Grid, Hidden } from '@material-ui/core';

const HomeContainer = () => {
  return (
    <Grid container spacing={3} direction="row">
      <Grid item xs={12}>
        <Hidden smUp>
          <MobileCategoryBar />
        </Hidden>
      </Grid>
      <Grid item xs={12} sm={9}>
        <FilterBar />
        <List />
      </Grid>
      <Grid item sm={3}>
        <Hidden xsDown>
          <CategoryBar />
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default HomeContainer;
