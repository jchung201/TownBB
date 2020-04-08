import React from 'react';
import Link from 'next/link';
import {
  DesktopWrapper,
  Nav,
  LogoWrapper,
  Logo,
  CreateWrapper,
  Create,
  Content,
} from './layoutStyled';
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

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link href="https://www.townbb.com/">TownBB</Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  appBar: {
    cursor: 'pointer',
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
  },
}));

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="primary" className={classes.appBar}>
        <Toolbar>
          <Link href="/">
            <Typography
              variant="h4"
              color="inherit"
              noWrap
              className={classes.title}
            >
              TownBB
            </Typography>
          </Link>
          <Link href="/create">
            <Button color="inherit" size="large">
              Create a Posting
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>{children}</Paper>
      </main>
    </React.Fragment>
  );
};

export default Layout;
