import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  Button,
  TextField,
} from '@material-ui/core';

import { SUB_CATEGORY_NAMES } from '../../utilities/categories';

const TopCategories = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;

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
        </CardContent>
      </Card>
    </div>
  );
};

export default TopCategories;
