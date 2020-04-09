import React from 'react';
import Link from 'next/link';
import { List, ListSubheader, ListItem, ListItemText } from '@material-ui/core';
import { CATEGORY_NAMES } from '../../../utilities/categories';

const TopCategories = () => {
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
            Categories
          </ListSubheader>
        }
        color="primary"
        style={{
          width: '100%',
          maxWidth: 360,
          backgroundColor: '#3f51b5',
          color: 'white',
          textAlign: 'center',
        }}
      >
        {CATEGORY_NAMES.map(category => {
          return (
            <ListItem button key={category.id}>
              <Link href="/categories/[id]" as={`/categories/${category.id}`}>
                <ListItemText
                  primary={category.name}
                  style={{ textAlign: 'center' }}
                />
              </Link>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default TopCategories;
