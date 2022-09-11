import React from "react";
import "./action.scss";
import { Tooltip } from "@mui/material";

const Actions = (props) => {
  const { icons } = props;

  return (
    <div className="actions">
      {icons.map((icon, index) => {
        let custom = icon.customClass ? icon.customClass : " ";
        return (
          <div className={"actions__icon" + custom} key={index}>
            {icon.title ? (
              <Tooltip title={icon.title} arrow placement="top" disableFocusListener disableTouchListener >
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
        );
      })}
    </div>
  );
};

export default Actions;
