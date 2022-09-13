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
import ActiveRandom from "./ActiveRandom";
import Previous from "./Previous";
import PlayPause from "./PlayPause";
import NextSong from "./NextSong";
import Loop from "./Loop";
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


  return (
    <>
      <div className="level__item">
        <div className="action-bar">
          {/* acitve random song */}
          <ActiveRandom />
          {/* previous song */}
          <Previous />
          {/* Play/Pause */}
          <PlayPause isPlay={isPlay} />
          {/* next song */}
          <NextSong />
          {/* loop */}
          <Loop />
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
          sx={{ color: "white" }}
        />
        <span className="time right">{formatDuration(duration)}</span>
      </div>
    </>
  );
};

export default Controls;
