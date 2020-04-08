import React from 'react';
import Link from 'next/link';
import { LinkA } from '../Common/Links';
import {
  Button,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';

const Layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" color="primary">
        <Toolbar>
          <Typography style={{ flexGrow: 1 }} variant={'h4'} noWrap>
            <Link href="/">
              <LinkA href="/">TownBB</LinkA>
            </Link>
          </Typography>
          <Button color="inherit" size="large">
            <Link href="/create">
              <LinkA href="/create">Create a Posting</LinkA>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;

{
  /* <Typography variant="body2" align="center">
{'Copyright © '}
<a href="https://www.townbb.com/">TownBB</a>{' '}
{new Date().getFullYear()}
{'.'}
</Typography> */
}
