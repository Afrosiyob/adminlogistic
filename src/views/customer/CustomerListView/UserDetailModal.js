import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Avatar, Typography, makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

export default function UserDetailModal(props) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const classes = useStyles();
  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Box
        alignItems="center"
        display="flex"
        onClick={handleClickOpen('paper')}
      >
        <Typography color="textPrimary" variant="body1">
          {props.customerName}
        </Typography>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          {' '}
          {props.customerName}
        </DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <ul style={{ padding: '15px' }}>
              <li>
                <b>Full Name : </b> {props.customerName}{' '}
              </li>
              <li>
                <b>PhoneNumber : </b> {props.customerPhonenumber}
              </li>
              <li>
                <b>Location : </b> {props.customerLocation}
              </li>
              <li>
                <b>Status : </b> {props.customerStatus}
              </li>
              <li>
                <b>TransportType : </b> {props.customerTransportType}
              </li>
              <li>
                <b>TransportGovNumber : </b> {props.customerTransportGovNumber}
              </li>
              <li>
                <b>BaggageVolume : </b> {props.customerBaggageVolume}
              </li>
              <li>
                <b>BaggageMass : </b> {props.customerBaggageMass}
              </li>
              <li>
                <b>TimeOfStatus : </b> {props.customerTimeOfStatus}
              </li>
            </ul>
            <div style={{ padding: '10px 15px' }}>
              <img
                src={
                  `http://195.158.2.207/uploads/` + props.customerPassportPhoto
                }
                alt="passPhoto"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>

            <div style={{ padding: '10px 15px' }}>
              <img
                src={
                  `http://195.158.2.207/uploads/` +
                  props.customerTechPassportPhoto
                }
                alt="passPhoto"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
