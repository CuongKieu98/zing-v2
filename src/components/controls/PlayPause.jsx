import React, { useEffect, useState } from "react";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { useDispatch } from "react-redux";
import { togglePlay } from "../../redux/actions/actions";
import Button from "../button/Button";
import images from "../../assets/images";

const PlayPause = ({ audioRef, tracks }) => {
  const dispatch = useDispatch();
  const [isPlay, setIsPlay] = useState(tracks.isPlay);
  const handleTogglePlay = (e) => {
    e.stopPropagation();
    if(tracks.isLoading) return;
    if (!isPlay) {
      setIsPlay(true);
      audioRef.current.play();
    } else {
      setIsPlay(false);
      audioRef.current.pause();
    }
    dispatch(togglePlay(!isPlay));
  };

  useEffect(() => {
    setIsPlay(tracks.isPlay);
    if (tracks.isPlay) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [tracks.isPlay]);

  return (
    <>
      <Button
        className={"is-40 no-bg mg-07"}
        onClick={(e) => handleTogglePlay(e)}
        customIcon={"border-icon"}
      >
        {tracks && tracks.isLoading ? (
          <img className="play-loading" src={images.spiner} alt="" />
        ) : !isPlay ? (
          <PlayArrowRoundedIcon
            sx={{ fontSize: 30, color: "var(--setting-icon-text)" }}
          />
        ) : (
          <PauseRoundedIcon
            sx={{ fontSize: 30, color: "var(--setting-icon-text)" }}
          />
        )}
      </Button>
    </>
  );
};

export default PlayPause;
