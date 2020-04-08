import React from 'react';
import FilterBar from '../FilterBar/FilterBar';
import List from '../List/List';
import TopCategories from '../TopCategories/TopCategories';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  homeContainer: {
    flexGrow: 1,
    marginTop: theme.spacing(15),
  },
}));

const HomeContainer = () => {
  const classes = useStyles();
  return (
    <Container className={classes.homeContainer}>
      <Grid container spacing={3} direction="row">
        <Grid item xs={6}>
          <FilterBar />
          <List />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TopCategories />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeContainer;
