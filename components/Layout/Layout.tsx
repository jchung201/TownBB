import React from 'react';
import Link from 'next/link';
import { LinkA } from '../Common/Links';
import { makeStyles } from '@material-ui/core/styles';
import {
  CardMedia,
  Box,
  Button,
  Grid,
  CssBaseline,
  AppBar,
  Toolbar,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      padding: theme.spacing(3),
    },
  },
  title: {
    flexGrow: 1,
    cursor: 'pointer',
  },
}));

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="primary" className={classes.appBar}>
        <Toolbar>
          <Typography
            variant="h4"
            color="inherit"
            noWrap
            className={classes.title}
          >
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
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          {children}
          <Typography variant="body2" align="center">
            {'Copyright © '}
            <Link href="https://www.townbb.com/">TownBB</Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Paper>
      </main>
    </React.Fragment>
  );
};

export default Layout;
