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
    color: theme.palette.primary.main,
    backgroundColor: 'white',
    textDecoration: 'none',
    '&:hover': {
      color: 'white',
    },
  },
  listHeader: {
    width: '90%',
    maxWidth: 360,
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    textAlign: 'center',
    paddingBottom: '0',
    border: `0.1em solid ${theme.palette.primary.main}`,
  },
}));

const TopCategories = () => {
  const classes = useStyles();

  return (
    <div>
      <List
        component="nav"
        subheader={
          <ListSubheader
            component="div"
            style={{ color: 'white', fontSize: '1.5em', position: 'relative' }}
          >
            Job Categories
          </ListSubheader>
        }
        className={classes.listHeader}
      >
        {CATEGORY_NAMES.map(category => {
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

export default TopCategories;
