import React from "react";
import { Link } from "react-router-dom";
import images from "../../assets/images";
import "./media.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeBgSelector } from "../../redux/selectors/selectors";
import Actions from "../actions/Actions";
import { Tooltip } from "@mui/material";
import Action from "../action/Action";
const Media = (props) => {
  const { right } = props;
  const bg = useSelector(changeBgSelector);

  return (
    <div className="media">
      <div className="media__left">
        {/*start img in bar */}
        <Link to={"/"}>
          <div className="media__thumb">
            <figure style={{ backgroundColor: `${bg.bglayout}` }}>
              <img src={images.datatest} alt="" />
            </figure>
          </div>
        </Link>
        {/*end img in bar */}
      </div>
      <div className="media__content ">
        <h3 className="is-mark level-left">Nhìn Về Phía Em </h3>
        <h4>Subtitle</h4>
      </div>
      <div className="media__right">
        <div className="level">

          {right.map((icon, index) => (
            <div className="level__item" key={index} >
              <Action icon={icon} className={"pd-3"}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
