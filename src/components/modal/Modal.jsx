import React, { useEffect, useState } from "react";
//dialog
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "./modal.scss";
import Button from "../button/Button";
import { useSelector } from "react-redux";
import { actionSelector } from "../../redux/selectors/selectors";

const Modal = ({ onOpen, onClose, children, title }) => {
  const [theme, setTheme] = useState("");
  const dataTheme = useSelector(actionSelector).ThemeReducer;

  useEffect(() =>{
    setTheme(dataTheme)
  },[dataTheme])

  return (
    <div className={"modal-dialog"}>
      <Dialog
        open={onOpen}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth="md"
      >
        <div data-theme={theme.color?.datatheme} className={"modal-dialog " + theme.mode}>
          <div className="close-btn">
            <Button className={"bg-circle is-40"} style={{backgroundColor:"transparent"}} onClick={onClose}>
              <CloseRoundedIcon sx={{ fontSize: 20, color: "#fff" }} />
            </Button>
          </div>
          <h3 className="title main-title">{title}</h3>

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
