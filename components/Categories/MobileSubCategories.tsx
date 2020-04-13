import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { SUB_CATEGORY_NAMES } from '../../utilities/categories';

const TopCategories = () => {
  const router = useRouter();
  const {
    query: { slug },
  } = router;
  const [category, setCategory] = useState('');
  if (category) {
    router.push(`/categories/${slug[0]}/${category}`);
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
        {slug &&
          SUB_CATEGORY_NAMES[slug[0]].map(category => {
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
