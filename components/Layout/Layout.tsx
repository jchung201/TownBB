import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { LinkA, LinkB } from '../Common/Links';
import {
  Button,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
} from '@material-ui/core';
import BreadCrumb from './BreadCrumb';

const Layout: React.FC = ({ children }) => (
  <React.Fragment>
    <CssBaseline />
    <AppBar position="relative" color="primary">
      <Toolbar>
        <Link href="/">
          <Typography style={{ flexGrow: 1 }} variant={'h4'} noWrap>
            <LinkA href="/">TownBB</LinkA>
          </Typography>
        </Link>
        <Link href="/create">
          <Button color="inherit" size="large">
            <LinkA href="/create">Create a Posting</LinkA>
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
    <main>
      <Container style={{ flexGrow: 1, marginTop: '2em' }}>
        <BreadCrumb />
        {children}
      </Container>
    </main>
  </React.Fragment>
);

export default Layout;
