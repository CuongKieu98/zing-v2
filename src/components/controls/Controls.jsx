import React, { useState } from "react";
import "./controls.scss";
import Action from "../action/Action";
//icon
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import ShuffleRoundedIcon from "@mui/icons-material/ShuffleRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import { Slider } from "@mui/material";
//icon

const Controls = () => {
  const [isPlay, setIsPlay] = useState(false);
  const duration = 200; // seconds
  const [position, setPosition] = useState(0);
  const [paused, setPaused] = useState(false);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `0${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  const handleClick = () => {
    return;
  };

  const handleTogglePlay = () => {
    setIsPlay(!isPlay);
  };

  return (
    <>
      <div className="level__item">
        <div className="action-bar">
          <Action
            icon={{
              icon: <ShuffleRoundedIcon sx={{ fontSize: 20 }} />,
              title: "Bật phát ngẫu nhiên",
              onClick: (e) => handleClick(e, "favorite"),
              className: "card-small-icon ",
            }}
            className={"mg-07"}
          />
          <Action
            icon={{
              icon: <SkipPreviousRoundedIcon sx={{ fontSize: 20 }} />,
              onClick: (e) => handleClick(e, "favorite"),
              className: "card-small-icon ",
            }}
            className={"mg-07"}
          />
          <Action
            icon={{
              icon: !isPlay ? (
                <PlayArrowRoundedIcon sx={{ fontSize: 32 }} />
              ) : (
                <PauseRoundedIcon sx={{ fontSize: 32 }} />
              ),
              onClick: (e) => handleTogglePlay(),
              className: "border-icon ",
              customClass: " no-bg",
            }}
            className={"mg-07"}
          />
          <Action
            icon={{
              icon: <SkipNextRoundedIcon sx={{ fontSize: 20 }} />,
              onClick: (e) => handleClick(e, "Khác"),
              className: "card-small-icon ",
            }}
            className={"mg-07"}
          />
          <Action
            icon={{
              icon: <RepeatRoundedIcon sx={{ fontSize: 20 }} />,
              title: "Phát lại tất cả",
              onClick: (e) => handleClick(e, "Phát lại"),
              className: "card-small-icon ",
            }}
            className={"mg-07"}
          />
        </div>
      </div>
      <div className="level__item mb-5">
        <span className="time left">{formatDuration(position)}</span>
        <Slider
          aria-label="time-indicator"
          size="small"
          value={position}
          min={0}
          step={1}
          max={duration}
          onChange={(_, value) => setPosition(value)}
          sx={{color:"white"}}
        />
        <span className="time right">{formatDuration(duration)}</span>
      </div>
    </>
  );
};

export default Controls;
