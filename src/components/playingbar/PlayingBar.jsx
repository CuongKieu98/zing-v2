import React, { useState } from "react";
import "./playingbar.scss";
import { useDispatch, useSelector } from "react-redux";
import { actionSelector } from "../../redux/selectors/selectors";
import Media from "../media/Media";
import { Slider } from "@mui/material";

//icon
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Controls from "../controls/Controls";

import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";

import { useRef } from "react";
import RightBar from "./rightbar/RightBar";
import NowPlaying from "./nowplaying/NowPlaying";
import { setPopup } from "../../redux/actions/actions";
import Button from "../button/Button";
//icon

const PlayingBar = () => {
  const reducer = useSelector(actionSelector);
  const bg = reducer.bgReducer;
  const tracks = reducer.audioReducer;
  const theme = reducer.ThemeReducer;
  const dispatch = useDispatch();

  const nowPlayingRef = useRef(null);
  const playbarRef = useRef(null);

  const audioRef = useRef(null);
  const rightBarRef = useRef(null);

  const [valueVolume, setValueVolume] = useState(50);
  const [openRight, setOpenRight] = useState(false);
  const [openNP, setOpenNP] = useState(false);

  const handleClick = () => {
    return;
  };
  const handleChangeVol = (event, newValue) => {
    setValueVolume(newValue);
  };
  const openRightBar = (e) => {
    e.stopPropagation();
    if (!openRight) {
      setOpenRight(true);
      rightBarRef.current.classList.add("is-open");
    } else {
      rightBarRef.current.classList.remove("is-open");
      setOpenRight(false);
    }
  };

  const handleNowPlaying = () => {
    if (!openNP) {
      nowPlayingRef.current.classList.add("on-show");
      playbarRef.current.classList.add("opac");
      setOpenNP(true);
      dispatch(setPopup(true));
    } else {
      nowPlayingRef.current.classList.remove("on-show");
      playbarRef.current.classList.remove("opac");
      setOpenNP(false);
      dispatch(setPopup(false));
    }
  };

  const icons = [
    {
      icon: <FavoriteBorderIcon sx={{ fontSize: 20, color: "var(--setting-icon-text)" }} />,
      title: "Thêm vào thư viện",
      onClick: (e) => handleClick(e, "favorite"),
      className: "card-small-icon ",
    },
    {
      icon: <MoreHorizIcon sx={{ fontSize: 20, color: "var(--setting-icon-text)" }} />,
      title: "Xem thêm",
      onClick: (e) => handleClick(e, "Khác"),
      className: "card-small-icon ",
    },
  ];
  const iconR = [
    {
      icon: <VolumeUpRoundedIcon sx={{ fontSize: 20 , color: "var(--setting-icon-text)"}} />,
      onClick: (e) => handleClick(e, "Khác"),
      className: "hide-on-mobile ",
    },
  ];

  return (
    <div className="playing-bar">
      <div className="on-playing-bar" ref={nowPlayingRef}>
        <NowPlaying
          bg={bg}
          tracks={tracks}
          theme={theme}
          onClick={handleNowPlaying}
        />
      </div>
      <RightBar bg={bg} tracks={tracks} refbar={rightBarRef} />

      <div className="playing-bar__controls" ref={playbarRef}>
        <div
          className="level playing-bar__controls__container"
          style={{
            //backgroundImage: `url(${bg.themePlaying})`,
            backgroundColor: "var(--player-bg)",
            borderTop: "1px solid var(--border-player)",
          }}
        >
          <div className="playing-bar__controls__left level-left">
            <div className="level__item is-narrow" onClick={handleNowPlaying}>
              <Media right={icons} item={tracks.infoSong} />
            </div>
          </div>
          <div className="playing-bar__controls__center">
            <Controls audioRef={audioRef} tracks={tracks} onOpenList={(e) => openRightBar(e)}/>
          </div>
          <div className="playing-bar__controls__right">
            {iconR.map((item, index) => (
              <div className="level__item is-narrow" key={index}>
                <Button
                  className={"is-32 no-bg "+ item.className}
                  onClick={(e) => console.log("test")}
                  customIcon={"is-hover-circle"}
                >
                  {item.icon}
                </Button>
           
              </div>
            ))}
            <div className="level__item is-narrow">
              <Slider
                aria-label="Volume"
                value={valueVolume}
                onChange={handleChangeVol}
                className={"duration-bar"}
                size="small"
                sx={{ color: "white" }}
              />
            </div>
            <div className="level__item is-narrow">
              <span className="divide"></span>
            </div>
            <div className="level__item is-narrow">
              <Button
                className={" square-bg mg-07 hide-on-mobile"}
                onClick={(e) => openRightBar(e)}
                customIcon={"is-hover-square"}
              >
                <QueueMusicIcon
                  sx={{ fontSize: 20, color: "var(--setting-icon-text)" }}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayingBar;
