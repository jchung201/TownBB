import React from 'react';
import Link from 'next/link';
import {
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';
import { CATEGORY_NAMES } from '../../utilities/categories';

const TopCategories = () => (
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
          <React.Fragment key={category.id}>
            <Divider style={{ backgroundColor: 'white' }} />
            <Link href="/categories/[id]" as={`/categories/${category.id}`}>
              <ListItem
                button
                href={`/categories/${category.id}`}
                component="a"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
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

export default TopCategories;
