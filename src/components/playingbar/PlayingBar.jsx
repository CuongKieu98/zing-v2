import React from "react";
import "./playingbar.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeBgSelector } from "../../redux/selectors/selectors";

const PlayingBar = () => {
  const bg = useSelector(changeBgSelector);

  return (
    <div className="playing-bar">
      <div
        className="playing-bar__controls"
        style={{ backgroundColor: `${bg.bglayout}` }}
      >
        <div
          className="level playing-bar__controls__container"
          style={{
            backgroundImage: `${bg.themePlaying}`,
            backgroundColor: `${bg.playerbg}`,
            borderTop:`${bg.borderPlayer}`
          }}
        >
          <div className="playing-bar__controls__left"></div>
          <div className="playing-bar__controls__center"></div>
          <div className="playing-bar__controls__right"></div>
        </div>
      </div>
    </div>
  );
};

export default PlayingBar;
