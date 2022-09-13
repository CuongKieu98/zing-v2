import React, { useState } from "react";
import Action from "../action/Action";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { useDispatch } from "react-redux";
import { togglePlay } from "../../redux/actions/actions";

const PlayPause = ({ audioRef }) => {
  const dispatch = useDispatch();
  const [isPlay, setIsPlay] = useState(false);
  const handleTogglePlay = () => {
    if (!isPlay) {
      setIsPlay(true);
      audioRef.current.play();
    } else {
      setIsPlay(false);
      audioRef.current.pause();
    }
    dispatch(togglePlay(!isPlay));
  };
  return (
    <>
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
    </>
  );
};

export default PlayPause;