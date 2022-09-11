import React from "react";
import "./action.scss";

const Actions = (props) => {
  const { icons } = props;

  return (
    <div className="actions">
      {icons.map((icon, index) => {
        let custom = icon.customClass ? icon.customClass : " ";
        return (
          <div className={"actions__icon" + custom} key={index}>
            <i className={icon.className} onClick={icon.onClick}>
              {icon.icon}
            </i>
          </div>
        );
      })}
    </div>
  );
};

export default Actions;
