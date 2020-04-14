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
  Typography,
} from '@material-ui/core';
import BreadCrumb from './BreadCrumb';
import Copyright from './Copyright';

const useStyles = makeStyles(theme => ({
  navLogo: {
    width: '20em',
    [theme.breakpoints.down('sm')]: {
      width: '15em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '10em',
    },
  },
  navCreate: {
    fontSize: '1.5em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8em',
    },
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
  footerMessage: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8em',
    },
  },
  main: {
    marginBottom: '5em',
  },
  layoutContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.layoutContainer}>
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
      <main className={classes.main}>
        <Container style={{ flexGrow: 1, marginTop: '2em' }}>
          <BreadCrumb />
          {children}
        </Container>
      </main>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="subtitle1" align="center">
            <strong className={classes.footerMessage}>
              TownBB is commited to help assist small businesses and workers who
              have been impacted by COVID-19 related impacts.
            </strong>
          </Typography>
          <Typography
            variant="body1"
            align="center"
            className={classes.footerMessage}
          >
            If you have any questions or issues, please contact
            <a href="mailto: support@townbb.com"> support@townbb.com</a>.
          </Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
};

export default Layout;
