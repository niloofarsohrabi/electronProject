import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
export const ModalComponent = ({ showModalOrNot, close }) => {
  const classes = useStyles();
  const closeModal = () => {
    close && close();
  };
  return (
    <>
      {showModalOrNot && (
        <div>
          <Modal
            open={showModalOrNot}
            className={classes.modal}
            onClose={() => closeModal()}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={showModalOrNot}>
              <div className={classes.paper}>
                <h3 id="spring-modal-title">
                  You Must Add At Least Two Members
                </h3>
              </div>
            </Fade>
          </Modal>
        </div>
      )}
    </>
  );
};
