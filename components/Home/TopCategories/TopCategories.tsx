import React from 'react';
import Link from 'next/link';
import {
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';

const TopCategories = () => {
  const CATEGORY_NAMES = ['Full_Time', 'Part_Time', 'Gigs'];
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
        }}
      >
        {CATEGORY_NAMES.map(category => {
          return (
            <React.Fragment key={category}>
              <Divider style={{ backgroundColor: 'white' }} />
              <ListItem button>
                <Link href="/categories/[id]" as={`/categories/${category}`}>
                  <ListItemText
                    primary={category && category.split('_').join(' ')}
                    style={{ textAlign: 'center' }}
                  />
                </Link>
              </ListItem>
            </React.Fragment>
          );
        })}
      </List>
    </div>
  );
};

export default TopCategories;
