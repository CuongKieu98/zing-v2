import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actionSelector } from "../../redux/selectors/selectors";
import Actions from "../actions/Actions";

import "./card.scss";

const Card = (props) => {
  const { img, title, content, className, icons } = props;
  const CardClass = className ? className : "";
  const bg = useSelector(actionSelector).bgReducer;

  return (
    <div className={"card "  +  CardClass}>
      <div className="card__img">
        <figure style={{ backgroundColor: `${bg.bgLoading}` }}>
          <img src={img} alt="" />
        </figure>
        <div className="opacity"></div>
        {icons && (
          <div className="card__action">
            <Actions icons={icons} />
          </div>
        )}
      </div>
      <div className="card__content">
        <h3>
          <Link to={"/"}>
            <span>{title}</span>
          </Link>
        </h3>
        {content && (
          <h4>
            <span>{content}</span>
          </h4>
        )}
      </div>
    </div>
  );
};

export default Card;
