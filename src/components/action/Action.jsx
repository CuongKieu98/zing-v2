import React from "react";
import "./action.scss";
import { Tooltip } from "@mui/material";

const Action = (props) => {
  const { icon, className } = props;
  let classname = className ? className : "";
  let custom = icon.customClass ? icon.customClass : "";
  return (
    <div className={"action " + classname}>
      <div className={"action__icon" + custom}>
        {icon.title ? (
          <Tooltip
            title={icon.title}
            arrow
            placement="top"
            disableFocusListener
          >
            <i className={icon.className} onClick={icon.onClick}>
              {icon.icon}
            </i>
          </Tooltip>
        ) : (
          <i className={icon.className} onClick={icon.onClick}>
            {icon.icon}
          </i>
        )}
      </div>
    </div>
  );
};

export default Action;
