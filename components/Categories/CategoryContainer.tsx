import React from 'react';
import { useRouter } from 'next/router';
import { Grid, Hidden } from '@material-ui/core';

import FilterBar from '../Home/FilterBar';
import List from '../Home/List';
import Subscribe from './Subscribe';
import MobileFilters from './MobileFilters';
import Filters from './Filters';

const CategoryContainer = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  return (
    <Grid container spacing={3} direction="row">
      <Grid item xs={12}>
        <Hidden smUp>{id && <MobileFilters />}</Hidden>
      </Grid>
      <Grid item sm={9} xs={12}>
        <FilterBar />
        <List />
      </Grid>
      <Grid item sm={3} xs={12}>
        <Hidden xsDown>{id && <Filters />}</Hidden>
        <Subscribe />
      </Grid>
    </Grid>
  );
};

export default CategoryContainer;
