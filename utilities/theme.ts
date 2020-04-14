import { createMuiTheme } from '@material-ui/core';

const defaultTheme = createMuiTheme({});
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
          fontSize: '1.2rem',
        },
        [breakpoints.down('xs')]: {
          fontSize: '1rem',
        },
      },
      h6: {
        [breakpoints.down('sm')]: {
          fontSize: '1rem',
        },
        [breakpoints.down('xs')]: {
          fontSize: '0.8rem',
        },
      },
    },
  },
};

export default theme;
