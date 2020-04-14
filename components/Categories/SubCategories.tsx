import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  CardHeader,
} from '@material-ui/core';
import { setType } from '../../store/home/homeActions';
import { SUB_CATEGORY_NAMES } from '../../utilities/categories';

const TopCategories = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  const dispatch = useDispatch();
  const type = useSelector(state => state.home.type);
  return (
    <div style={{ width: '90%' }}>
      <Card>
        <CardHeader
          subheader={'Filter Emplyment Type'}
          subheaderTypographyProps={{ align: 'center', color: 'inherit' }}
          style={{ backgroundColor: '#3f51b5', color: 'white' }}
        />
        <CardContent>
          <FormControl fullWidth>
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
        </CardContent>
      </Card>
    </div>
  );
};

export default TopCategories;
