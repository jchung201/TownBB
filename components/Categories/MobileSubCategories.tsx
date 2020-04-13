import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { SUB_CATEGORY_NAMES } from '../../utilities/categories';

const TopCategories = () => {
  const router = useRouter();
  const {
    query: { slug },
  } = router;

  return (
    <FormControl fullWidth>
      <InputLabel>Sub Categories</InputLabel>
      <Select labelId="demo-simple-select-label">
        {slug &&
          SUB_CATEGORY_NAMES[slug[0]].map(category => {
            return (
              <Link
                href="/categories/[id]/[sub]"
                as={`/categories/${slug[0]}/${category.id}`}
                key={category.id}
              >
                <MenuItem value={category.id}>
                  {category && category.name.split('_').join(' ')}
                </MenuItem>
              </Link>
            );
          })}
      </Select>
    </FormControl>
  );
};

export default TopCategories;
