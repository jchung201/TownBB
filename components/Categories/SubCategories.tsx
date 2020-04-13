import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';
import { SUB_CATEGORY_NAMES } from '../../utilities/categories';

const TopCategories = () => {
  const router = useRouter();
  const {
    query: { slug },
  } = router;

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
            Sub Categories
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
        {slug &&
          SUB_CATEGORY_NAMES[slug[0]].map(category => {
            return (
              <React.Fragment key={category.id}>
                <Divider style={{ backgroundColor: 'white' }} />
                <Link
                  href="/categories/[id]/[sub]"
                  as={`/categories/${slug[0]}/${category.id}`}
                >
                  <ListItem
                    button
                    component="a"
                    href={`/categories/${slug[0]}/${category.id}`}
                  >
                    <ListItemText
                      primary={
                        category.name && category.name.split('_').join(' ')
                      }
                      style={{ textAlign: 'center' }}
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
