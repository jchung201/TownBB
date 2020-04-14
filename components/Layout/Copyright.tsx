import React from 'react';
import { Typography } from '@material-ui/core';
const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <a href="https://www.townbb.com/">TownBB</a> {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
