import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { CATEGORY_NAMES } from '../../utilities/categories';

const TopCategories = () => {
  const router = useRouter();

  return (
    <FormControl fullWidth>
      <InputLabel>Job Categories</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        onChange={e => {
          const {
            target: { value },
          } = e;
          router.push('/categories/[id]', `/categories/${value}`);
        }}
      >
        {CATEGORY_NAMES.map(category => {
          return (
            <MenuItem key={category.id} value={category.id}>
              {category && category.name.split('_').join(' ')}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default TopCategories;
