import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
import { CATEGORY_NAMES } from '../../../utilities/categories';

const TopCategories = () => {
  const router = useRouter();
  const [category, setCategory] = useState('');
  if (category) {
    router.push(`/categories/${category}`);
  }

  return (
    <FormControl fullWidth>
      <InputLabel>Sub Categories</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        onChange={e => {
          const {
            target: { value },
          } = e;
          setCategory(String(value));
        }}
        value={category}
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
