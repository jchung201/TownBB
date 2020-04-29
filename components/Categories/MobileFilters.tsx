import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { setType } from '../../store/home/homeActions';
import { SUB_CATEGORY_NAMES } from '../../utilities/categories';

const MobileFilters = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  const dispatch = useDispatch();
  const type = useSelector(state => state.home.type);
  return (
    <FormControl fullWidth style={{ marginTop: '1.5em' }}>
      <InputLabel>Employment Type</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        value={type}
        onChange={event => {
          dispatch(setType(String(event.target.value)));
        }}
      >
        <MenuItem value="All">All</MenuItem>
        {id &&
          SUB_CATEGORY_NAMES[String(id)].map(category => {
            return (
              <MenuItem value={category.id} key={category.id}>
                {category && category.name.split('_').join(' ')}
              </MenuItem>
            );
          })}
      </Select>
    </FormControl>
  );
};

export default MobileFilters;
