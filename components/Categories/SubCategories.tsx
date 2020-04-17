import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles(theme => ({
  cardSubHeader: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
}));

const TopCategories = () => {
  const classes = useStyles();
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
          subheader={'Filter Employment Type'}
          subheaderTypographyProps={{
            align: 'center',
            color: 'inherit',
          }}
          className={classes.cardSubHeader}
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
