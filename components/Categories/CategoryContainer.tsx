import React from 'react';
import { useRouter } from 'next/router';
import { Grid, Hidden } from '@material-ui/core';

import FilterBar from '../Home/FilterBar';
import List from '../Home/List';
import Subscribe from './Subscribe';
import MobileSubCategories from './MobileSubCategories';
import SubCategories from './SubCategories';

const CategoryContainer = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  return (
    <Grid container spacing={3} direction="row">
      <Grid item xs={12}>
        <Hidden smUp>{id && <MobileSubCategories />}</Hidden>
      </Grid>
      <Grid item sm={9} xs={12}>
        <FilterBar />
        <List />
      </Grid>
      <Grid item sm={3} xs={12}>
        <Hidden xsDown>{id && <SubCategories />}</Hidden>
        <Subscribe />
      </Grid>
    </Grid>
  );
};

export default CategoryContainer;
