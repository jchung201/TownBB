import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import { IconButton, Collapse, Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
    [theme.breakpoints.down('sm')]: {
      width: '95%',
    },
  },
  alertTitle: {
    fontSize: '1.2em',
  },
  alertDescription: {
    fontSize: '1.0em',
  },
}));

export default function TransitionAlerts() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  let margin = '1.2em auto 1.2em auto';
  let border = '0.15em solid #e99832';
  if (!open) {
    margin = '0 0 0 0';
    border = 'none';
  }

  return (
    <div className={classes.root} style={{ margin, border }}>
      <Collapse in={open}>
        <Alert
          severity="warning"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
              className={classes.alertTitle}
            >
              <Close fontSize="inherit" />
            </IconButton>
          }
          className={classes.alertDescription}
        >
          <AlertTitle className={classes.alertTitle}>
            COVID-19 Message
          </AlertTitle>
          TownBB is commited to help small businesses and workers who have been
          impacted by COVID-19. If there is any way we can help or if you have
          any recommendations to improve the website, please contact support at{' '}
          <a href="mailto: support@townbb.com"> support@townbb.com</a>.
        </Alert>
      </Collapse>
    </div>
  );
}
