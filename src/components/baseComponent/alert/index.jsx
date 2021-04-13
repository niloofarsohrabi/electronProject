import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export const AlertComponent = ({ showAlertOrNot, closeAlert }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar
        open={showAlertOrNot}
        autoHideDuration={6000}
        onClose={closeAlert}
      >
        <Alert onClose={closeAlert} severity="success">
          Group was created successfully
        </Alert>
      </Snackbar>
    </div>
  );
};
