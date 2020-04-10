import React from 'react';
import Link from 'next/link';
import {
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';

const TopCategories = () => {
  const CATEGORY_NAMES = ['Full_Time', 'Part_Time', 'Gigs'];
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="age-native-simple">Categories</InputLabel>
      <Select labelId="demo-simple-select-label">
        {CATEGORY_NAMES.map(category => {
          return (
            <Link
              href="/categories/[id]"
              as={`/categories/${category}`}
              key={category}
            >
              <MenuItem id={category}>
                {category && category.split('_').join(' ')}
              </MenuItem>
            </Link>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default TopCategories;
