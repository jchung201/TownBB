import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';
import { CATEGORY_NAMES } from '../../utilities/categories';

const TopCategories = () => {
  const router = useRouter();
  const [categoryId, setCategory] = useState('');
  if (categoryId) {
    router.push(`/categories/${categoryId}`);
  }
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
            <React.Fragment key={category.id}>
              <Divider style={{ backgroundColor: 'white' }} />
              <ListItem
                button
                onClick={() => {
                  setCategory(category.id);
                }}
              >
                <ListItemText
                  primary={category && category.name.split('_').join(' ')}
                  style={{ textAlign: 'center' }}
                />
              </ListItem>
            </React.Fragment>
          );
        })}
      </List>
    </div>
  );
};

export default TopCategories;
