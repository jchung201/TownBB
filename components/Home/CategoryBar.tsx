import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Divider,
  Button,
} from '@material-ui/core';

import { CATEGORY_NAMES } from '../../utilities/categories';

const useStyles = makeStyles((theme) => ({
  categoryItem: {
    color: theme.palette.primary.main,
    backgroundColor: 'white',
    textDecoration: 'none',
    '&:hover': {
      color: 'white',
    },
  },
  listHeader: {
    width: '90%',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    textAlign: 'center',
    paddingBottom: '0',
    border: `0.1em solid ${theme.palette.primary.main}`,
  },
  createJob: {
    width: '90%',
    color: 'white',
    marginBottom: '1.4em',
    height: '3em',
    fontSize: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  catHeader: {
    color: 'white',
    fontSize: '1.5rem',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
}));

const CategoryBar = () => {
  const classes = useStyles();

  return (
    <div>
      <Link href="/create">
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.createJob}
        >
          Post Job
        </Button>
      </Link>
      <List
        component="nav"
        subheader={
          <ListSubheader component="div" className={classes.catHeader}>
            Categories
          </ListSubheader>
        }
        className={classes.listHeader}
      >
        {CATEGORY_NAMES.map((category) => {
          return (
            <React.Fragment key={category.id}>
              <Divider color="primary" />
              <Link href="/categories/[id]" as={`/categories/${category.id}`}>
                <ListItem
                  button
                  // pass href look documentation
                  href={`/categories/${category.id}`}
                  component="a"
                  className={classes.categoryItem}
                >
                  <ListItemText
                    primary={
                      category && (
                        <strong>{category.name.split('_').join(' ')}</strong>
                      )
                    }
                    style={{
                      textAlign: 'center',
                    }}
                  />
                </ListItem>
              </Link>
            </React.Fragment>
          );
        })}
      </List>
    </div>
  );
};

export default CategoryBar;
