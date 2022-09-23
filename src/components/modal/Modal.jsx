import React,{useEffect, useState} from 'react'
//dialog
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from '@mui/material/Button';
import Card from '../card/Card';
import themes from '../../assets/theme';

const Modal = ({onOpen,onClose,children}) => {


  return (
    <div>
    <Dialog
      open={onOpen}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth={true}
      maxWidth="md"
    >
      <DialogTitle id="alert-dialog-title">
        {"Giao Diện"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
        {children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Disagree</Button>
        <Button onClick={onClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  )
}

export default Modal