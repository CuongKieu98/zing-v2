import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

const Button = (props) => {
  const { className, onClick, style,customIcon, children } = props;
  return (
    <button
      className={"btn " + className}
      onClick={onClick ? onClick : null}
      style={style}
      tabIndex={0}
    >
      <i className={"icon-btn " + customIcon}>{children}</i>
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
