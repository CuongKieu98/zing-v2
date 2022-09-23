import React, { useEffect, useState } from "react";
//dialog
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import Card from "../card/Card";
import themes from "../../assets/theme";
import "./modal.scss"
import Button from "../button/Button";

const Modal = ({ onOpen, onClose, children }) => {
  return (
    <div className="modal-dialog">
      <Dialog
        open={onOpen}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth="md"
      >
        <div className="modal-dialog"> 
        <div className="close-btn">
        <Button
              className={"bg-circle is-40"}
              onClick={onClose}
            >
              <CloseRoundedIcon sx={{ fontSize: 20, color: "#fff" }} />
            </Button>
        </div>
        <h2 className="title main-title">{"Giao Diện"}</h2>

        <DialogContent>
          <DialogContentText id="alert-dialog-description" component={"span"}>
            {children}
          </DialogContentText>
        </DialogContent>

        </div>

      </Dialog>
    </div>
  );
};

export default Modal;
