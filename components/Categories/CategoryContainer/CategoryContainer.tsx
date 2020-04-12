import React from 'react';
import { Grid, Hidden } from '@material-ui/core';

import FilterBar from '../../Home/FilterBar/FilterBar';
import List from '../../Home/List/List';
import Subscribe from '../Subscribe/Subscribe';
import MobileSubCategories from '../SubCategories/MobileSubCategories';
import SubCategories from '../SubCategories/SubCategories';

const CategoryContainer = () => {
  return (
    <Grid container spacing={3} direction="row">
      <Grid item xs={12}>
        <Hidden smUp>
          <MobileSubCategories />
        </Hidden>
      </Grid>
      <Grid item sm={9} xs={12}>
        <FilterBar />
        <List />
      </Grid>
      <Grid item sm={3} xs={12}>
        <Subscribe />
        <SubCategories />
      </Grid>
    </Grid>
  );
};

export default CategoryContainer;
