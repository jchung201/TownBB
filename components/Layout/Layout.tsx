import React from 'react';
import Link from 'next/link';
import { LinkA } from '../Common/Links';
import {
  Button,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
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
      <main>
        <Container style={{ flexGrow: 1, marginTop: '5em' }}>
          {children}
        </Container>
      </main>
    </React.Fragment>
  );
};

export default Layout;
