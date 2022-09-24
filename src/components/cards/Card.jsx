import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import themes from "../../assets/theme";
import { actionSelector } from "../../redux/selectors/selectors";

import "./card.scss";

const Card = (props) => {
  const { image, className, customImg, actions, content } = props;
  const bg = useSelector(actionSelector).bgReducer;

  return (
    <div className="card-container">
      <div className={"card-image " + className}>
        <figure className={"image " + customImg}>
          <img src={image} alt="" />
        </figure>
        <div className="opacity"></div>
        <div className="card-actions"></div>
      </div>
      {content && (
        <div className="card-content">
          <div className="title">{content}</div>
        </div>
      )}
    </div>
  );
};

export default Card;
