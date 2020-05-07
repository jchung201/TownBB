import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { getPosts, getLocationAndPosts } from '../../store/home/homeActions';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const useStyles = makeStyles((theme) => ({
  locationInput: {
    marginLeft: '3em',
    marginRight: '3em',
    flexGrow: 4,
    [theme.breakpoints.down('sm')]: {
      marginLeft: '1em',
      marginRight: '1em',
    },
  },
  formTextInput: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8em',
    },
  },
  formTextLabel: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8em',
    },
  },
}));

const FilterBar = ({ width }) => {
  const router = useRouter();
  const {
    query: { id },
    pathname,
  } = router;
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();
  const classes = useStyles();

  const onSubmit = async (e) => {
    e.preventDefault();
    let category;
    if (pathname.startsWith('/category')) category = id;
    else category = null;

    // if location ... get location and then fetch
    if (location === '' || !location) {
      return dispatch(getPosts({ search, category }));
    }
    dispatch(getLocationAndPosts({ location, search, category }));
  };
  return (
    <form style={{ display: 'flex' }} onSubmit={onSubmit}>
      <TextField
        label="Search"
        onChange={(e) => setSearch(e.target.value)}
        style={{
          flexGrow: 4,
        }}
        InputProps={{
          classes: {
            input: classes.formTextInput,
          },
        }}
        InputLabelProps={{
          classes: {
            root: classes.formTextLabel,
          },
        }}
      />
      <TextField
        label={`Location${
          isWidthUp('md', width) ? ' (e.g. City, Zip Code)' : ''
        }`}
        onChange={(e) => setLocation(e.target.value)}
        className={classes.locationInput}
        InputProps={{
          classes: {
            input: classes.formTextInput,
          },
        }}
        InputLabelProps={{
          classes: {
            root: classes.formTextLabel,
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={onSubmit}
        type="submit"
        style={{
          flexGrow: 1,
          color: 'white',
        }}
      >
        Search {isWidthUp('md', width) ? 'Jobs' : ''}
      </Button>
    </form>
  );
};

export default withWidth()(FilterBar);
