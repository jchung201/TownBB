import React from 'react';
import Link from 'next/link';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { CATEGORY_NAMES } from '../../utilities/categories';

const TopCategories = () => (
  <FormControl fullWidth>
    <InputLabel>Categories</InputLabel>
    <Select labelId="demo-simple-select-label">
      {CATEGORY_NAMES.map(category => {
        return (
          <Link
            href="/categories/[id]"
            as={`/categories/${category.id}`}
            key={category.id}
          >
            <MenuItem key={category.id} value={category.id}>
              {category && category.name.split('_').join(' ')}
            </MenuItem>
          </Link>
        );
      })}
    </Select>
  </FormControl>
);

export default TopCategories;
