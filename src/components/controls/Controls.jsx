import React, { useState, useRef } from "react";
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
import { useDispatch } from "react-redux";
//icon

const Controls = (props) => {
  const { tracks } = props;
  const dispatch = useDispatch();
  const audioRef = useRef(null);

  const [duration, setDuration] = useState(tracks.duration || 0); // seconds
  const [position, setPosition] = useState(0);
  const [paused, setPaused] = useState(false);
  const [seekValue, setSeekValue] = useState(0);

  function formatDuration(value) {
    var m = Math.floor(value / 60);
    var s = Math.floor(value % 60);
    if (isNaN(m) || isNaN(s)) {
      m = 0;
      s = 0;
    }
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
  }
  const checkNaN = (val) => {
    if (isNaN(val)) {
      return 0;
    }
    return val;
  };

  const handleChange = (event, value) =>{
    let compute = (value * audioRef.current.duration) / 100;
    audioRef.current.currentTime = compute;
  }
  const onPlaying = () => {
    setPosition(audioRef.current.currentTime);
    setSeekValue(
      (audioRef.current.currentTime /
        checkNaN(audioRef.current.duration)) *
        100
    );
  };
  const onLoad = () => {
    setTimeout(() => {
      setPosition(audioRef.current?.currentTime);
    }, 1000);
  };
  return (
    <>
      <div className="level__item">
        <div className="action-bar">
          {/* acitve random song */}
          <ActiveRandom />
          {/* previous song */}
          <Previous />
          {/* Play/Pause */}
          <PlayPause audioRef={audioRef} />
          {/* next song */}
          <NextSong />
          {/* loop */}
          <Loop />
        </div>
      </div>
      <audio
        src={tracks.srcAudio}
        ref={audioRef}
        onTimeUpdate={onPlaying}
        onLoadedMetadata={onLoad}
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <div className="level__item mb-5">
        <span className="time left">{formatDuration(position)}</span>
        <Slider
          aria-label="time-indicator"
          size="small"
          value={seekValue || 0}
          onChange={handleChange}
          sx={{ color: "white" }}
        />
        <span className="time right">{formatDuration(duration)}</span>
      </div>
    </>
  );
};

export default Controls;
