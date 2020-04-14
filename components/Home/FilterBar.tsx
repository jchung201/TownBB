import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { getPosts, getLocationAndPosts } from '../../store/home/homeActions';

const useStyles = makeStyles(theme => ({
  locationInput: {
    marginLeft: '3em',
    marginRight: '3em',
    flexGrow: 4,
    [theme.breakpoints.down('sm')]: {
      marginLeft: '1em',
      marginRight: '1em',
    },
  },
}));

const FilterBar = () => {
  const router = useRouter();
  const {
    query: { id },
    pathname,
  } = router;
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();
  const classes = useStyles();

  const onSubmit = async e => {
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
        onChange={e => setSearch(e.target.value)}
        style={{
          flexGrow: 4,
        }}
      />
      <TextField
        label="Location (e.g. City, Zip)"
        onChange={e => setLocation(e.target.value)}
        className={classes.locationInput}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={onSubmit}
        type="submit"
        style={{
          flexGrow: 1,
        }}
      >
        Search
      </Button>
    </form>
  );
};

export default FilterBar;
