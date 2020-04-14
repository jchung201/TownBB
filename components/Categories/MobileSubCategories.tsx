import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { SUB_CATEGORY_NAMES } from '../../utilities/categories';

const TopCategories = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  return (
    <FormControl fullWidth>
      <InputLabel>Employment Type</InputLabel>
      <Select labelId="demo-simple-select-label">
        {id &&
          SUB_CATEGORY_NAMES[String(id)].map(category => {
            return (
              <Link
                href="/categories/[id]/[sub]"
                as={`/categories/${id}/${category.id}`}
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
