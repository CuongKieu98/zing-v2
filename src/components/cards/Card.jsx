import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import themes from "../../assets/theme";
import { actionSelector } from "../../redux/selectors/selectors";

const Card = (props) => {
  const { image, className, customImg, actions, content } = props;
  const bg = useSelector(actionSelector).bgReducer;

  return (
    <div className="card-container">
      <div className={"card-image " + className}>
        <figure className={"image " + customImg}>
          <img src={themes.lodon} alt="" />
        </figure>
        <div className="opacity"></div>
        <div className="card-actions">{actions}</div>
      </div>
      {content && <div className="card-content">{content}</div>}
    </div>
  );
};

export default Card;
