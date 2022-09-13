import React from "react";
import Action from "../action/Action";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

const PlayPause = (props) => {
    const {isPlay} = props
    const handleTogglePlay =() =>{
        return
    }
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
