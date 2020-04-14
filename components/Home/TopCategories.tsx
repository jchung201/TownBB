import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';
import { CATEGORY_NAMES } from '../../utilities/categories';

const useStyles = makeStyles(theme => ({
  categoryItem: {
    color: '#3f51b5',
    backgroundColor: 'white',
    textDecoration: 'none',
    '&:hover': {
      color: 'white',
    },
  },
}));

const TopCategories = () => {
  const classes = useStyles();

  return (
    <div>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            style={{ color: 'white', fontSize: '1.5em' }}
          >
            Job Categories
          </ListSubheader>
        }
        style={{
          width: '90%',
          maxWidth: 360,
          backgroundColor: '#3f51b5',
          color: 'white',
          textAlign: 'center',
          paddingBottom: '0',
          border: '0.1em solid #3f51b5',
        }}
      >
        {CATEGORY_NAMES.map(category => {
          return (
            <React.Fragment key={category.id}>
              <Divider style={{ backgroundColor: '#3f51b5' }} />
              <Link href="/categories/[id]" as={`/categories/${category.id}`}>
                <ListItem
                  button
                  href={`/categories/${category.id}`}
                  component="a"
                  className={classes.categoryItem}
                >
                  <ListItemText
                    primary={category && category.name.split('_').join(' ')}
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

export default TopCategories;
