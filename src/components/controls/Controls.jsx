import React, { useState, useRef } from "react";
import "./controls.scss";
import Action from "../action/Action";
//icon

import { Slider } from "@mui/material";
import ActiveRandom from "./ActiveRandom";
import Previous from "./Previous";
import PlayPause from "./PlayPause";
import NextSong from "./NextSong";
import Loop from "./Loop";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCurTime } from "../../redux/actions/actions";
//icon

const Controls = (props) => {
  const { tracks } = props;
  const dispatch = useDispatch();
  const audioRef = useRef(null);

  const [position, setPosition] = useState(0);
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

  const handleChange = (event, value) => {
    let compute = (value * audioRef.current.duration) / 100;
    audioRef.current.currentTime = compute;
  };
  const onPlaying = () => {
    setPosition(audioRef.current.currentTime);
    setSeekValue(
      (audioRef.current.currentTime / checkNaN(audioRef.current.duration)) * 100
    );
    if(audioRef.current) {
      dispatch(setCurTime(
        (formatDuration(audioRef.current.currentTime))
      ))
    }

  };
  const onLoad = () => {
    setTimeout(() => {
      setPosition(audioRef.current?.currentTime);
    }, 1000);
  };


  return (
    <>
      <div className="level__item mb-5 is-mobile">
        <span className="time left">{formatDuration(position)}</span>
        <Slider
          aria-label="time-indicator"
          size="small"
          value={seekValue || 0}
          onChange={handleChange}
          sx={{ color: "white" }}
          

        />
        <span className="time right">{formatDuration(tracks.duration)}</span>
      </div>
      <div className="level__item">
        <div className="action-bar">
          {/* acitve random song */}
          <ActiveRandom />
          {/* previous song */}
          <Previous />
          {/* Play/Pause */}
          <PlayPause audioRef={audioRef} tracks={tracks} />
          {/* next song */}
          <NextSong audioRef={audioRef} tracks={tracks} />
          {/* loop */}
          <Loop />
        </div>
      </div>
      <audio
        src={tracks.srcAudio}
        ref={audioRef}
        onTimeUpdate={onPlaying}
        onLoadedMetadata={onLoad}
        autoPlay={tracks.isPlay}
        hidden
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <div className="level__item mb-5 non-mobile">
        <span className="time left">{formatDuration(position)}</span>
        <Slider
          aria-label="time-indicator"
          size="small"
          value={seekValue || 0}
          onChange={handleChange}
          sx={{ color: "white" }}
        />
        <span className="time right">{formatDuration(tracks.duration)}</span>
      </div>
    </>
  );
};

export default Controls;
