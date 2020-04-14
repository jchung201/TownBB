import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { LinkA } from '../Common/Links';
import {
  Button,
  CssBaseline,
  AppBar,
  Toolbar,
  Container,
} from '@material-ui/core';
import BreadCrumb from './BreadCrumb';

const useStyles = makeStyles(theme => ({
  navLogo: {
    width: '20em',
    [theme.breakpoints.down('sm')]: {
      width: '15em',
    },
  },
  navCreate: {
    fontSize: '1.5em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2em',
    },
  },
}));

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" color="primary">
        <Toolbar>
          <div style={{ flexGrow: 1, padding: '0.2em' }}>
            <Link href="/">
              <LinkA href="/">
                <img
                  src="https://townbbpublic.s3.us-east-2.amazonaws.com/townbb_logo.png"
                  alt="TownBB Logo"
                  className={classes.navLogo}
                />
              </LinkA>
            </Link>
          </div>
          <Link href="/create">
            <LinkA href="/create">
              <Button color="inherit" className={classes.navCreate}>
                Create a Posting
              </Button>
            </LinkA>
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
};

export default Layout;
