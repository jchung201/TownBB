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
  const {
    query: { slug, id },
  } = router;
  let bcText = '';
  if (router.pathname === '/create') {
    bcText = 'Create';
  } else if (router.pathname.startsWith('/categories/')) {
    if (slug.length >= 1) {
      bcText = String(slug[0])
        .split('_')
        .join(' ');
    }
  } else if (router.pathname.startsWith('/posts/')) {
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
            {!slug && <Typography color="textPrimary">{bcText}</Typography>}
            {slug && slug.length > 0 && (
              <Link href={`/categories/${bcText.split(' ').join('_')}`}>
                <LinkB>{bcText}</LinkB>
              </Link>
            )}
            {slug && slug.length > 1 && (
              <Typography color="textPrimary">{slug[1]}</Typography>
            )}
          </Breadcrumbs>
          {children}
        </Container>
      </main>
    </React.Fragment>
  );
};

export default Layout;
