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
  Breadcrumbs,
} from '@material-ui/core';

const Layout: React.FC = ({ children }) => {
  const router = useRouter();
  let bcText = '';
  if (router.pathname === '/create') {
    bcText = 'Create';
  } else if (router.pathname.startsWith('/categories/')) {
    const {
      query: { id },
    } = router;
    bcText = String(id)
      .split('_')
      .join(' ');
  } else if (router.pathname.startsWith('/posts/')) {
    const {
      query: { id },
    } = router;
    bcText = `Post: ${String(id)}`;
  }
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
        <Container style={{ flexGrow: 1, marginTop: '2em' }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link href="/">
              <LinkB>Home</LinkB>
            </Link>
            <Typography color="textPrimary">{bcText}</Typography>
          </Breadcrumbs>
          {children}
        </Container>
      </main>
    </React.Fragment>
  );
};

export default Layout;
