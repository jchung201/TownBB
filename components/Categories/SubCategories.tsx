import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';
import { CATEGORY_NAMES, SUB_CATEGORY_NAMES } from '../../utilities/categories';

const TopCategories = () => {
  const category = useSelector(state => state.home.category);
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
        {category &&
          SUB_CATEGORY_NAMES[category].map(category => {
            return (
              <React.Fragment key={category.id}>
                <Divider style={{ backgroundColor: 'white' }} />
                <ListItem button>
                  <ListItemText
                    primary={
                      category.name && category.name.split('_').join(' ')
                    }
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
