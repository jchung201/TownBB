import { createMuiTheme } from '@material-ui/core';

const defaultTheme = createMuiTheme({
  palette: {
    primary: { main: '#4ca69d' },
  },
});
const {
  breakpoints,
  typography: { pxToRem },
} = defaultTheme;

const theme = {
  ...defaultTheme,
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: '5rem',
        [breakpoints.down('xs')]: {
          fontSize: '3rem',
        },
      },
      h4: {
        [breakpoints.down('sm')]: {
          fontSize: '1.4rem',
        },
        [breakpoints.down('xs')]: {
          fontSize: '1.2rem',
        },
      },
      h6: {
        [breakpoints.down('sm')]: {
          fontSize: '1.2rem',
        },
        [breakpoints.down('xs')]: {
          fontSize: '1rem',
        },
      },
    },
  },
};

export default theme;
