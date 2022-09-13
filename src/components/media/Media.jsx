import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./media.scss";
import { useDispatch, useSelector } from "react-redux";
import { actionSelector } from "../../redux/selectors/selectors";
import { Tooltip } from "@mui/material";
import Action from "../action/Action";

//icon
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

const Media = (props) => {
  const { left, right, item } = props;
  const numRef = useRef(null);
  const bg = useSelector(actionSelector).bgReducer;

  useEffect(() => {
    if (left && (left.rank === 1 || left.rank === 2 || left.rank === 3)) {
      numRef.current.classList.add(`top-${left.rank}`);
    }
  }, []);

  return (
    <div className="media">
      <div className="media__left">
        {left && (
          <div className="media__left__rank mr-15">
            <span className={"number"} ref={numRef}>
              {left.rank}
            </span>
          </div>
        )}
        {/*start img in bar */}
        <Link to={"/"}>
          <div className="media__thumb">
            <figure style={{ backgroundColor: `${bg.bglayout}` }}>
              <img src={item.thumbnailM} alt="" />
            </figure>
            <div className="opacity"></div>
            <div className="media__action">
              <Action
                icon={{
                  icon: <PlayArrowRoundedIcon sx={{ fontSize: 30 }} />,
                  onClick: (e) => console.log("media icon click"),
                  customClass: " no-bg",
                }}
                className="center"
              />
            </div>
          </div>
        </Link>
        {/*end img in bar */}
      </div>
      <div className="media__content ">
        <h3 className="is-mark level-left">{item.title}</h3>
        <h4 className="is-mark">
          <Link to={"/"}>{item.artistsNames}</Link>
        </h4>
      </div>
      <div className="media__right">
        <div className="level">
          {right?.map((icon, index) => (
            <div className="level__item" key={index}>
              <Action icon={icon} className={"pd-3"} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
