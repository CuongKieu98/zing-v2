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
import Action from "../action/Action";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LyricsIcon from "@mui/icons-material/Lyrics";
import TabRoundedIcon from "@mui/icons-material/TabRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import { useRef } from "react";
//icon

const PlayingBar = () => {
  const bg = useSelector(actionSelector).bgReducer;
  const rightbarRef = useRef(null);

  const [valueVolume, setValueVolume] = useState(50);

  const handleClick = () => {
    return;
  };
  const handleChangeVol = (event, newValue) => {
    setValueVolume(newValue);
  };
  const openRightBar = () => {};

  const icons = [
    {
      icon: <FavoriteBorderIcon sx={{ fontSize: 20 }} />,
      title: "Thêm vào thư viện",
      onClick: (e) => handleClick(e, "favorite"),
      className: "card-small-icon ",
    },
    {
      icon: <MoreHorizIcon sx={{ fontSize: 20 }} />,
      title: "Xem thêm",
      onClick: (e) => handleClick(e, "Khác"),
      className: "card-small-icon ",
    },
  ];
  const iconR = [
    {
      icon: <YouTubeIcon sx={{ fontSize: 20 }} />,
      title: "Xem MV",
      onClick: (e) => handleClick(e, "favorite"),
      className: "card-small-icon ",
    },
    {
      icon: <LyricsIcon sx={{ fontSize: 20 }} />,
      title: "Xem lời bài hát",
      onClick: (e) => handleClick(e, "Khác"),
      className: "card-small-icon ",
    },
    {
      icon: <TabRoundedIcon sx={{ fontSize: 20 }} />,
      title: "Chế độ cửa sổ",
      onClick: (e) => handleClick(e, "Khác"),
      className: "card-small-icon ",
    },
    {
      icon: <VolumeUpRoundedIcon sx={{ fontSize: 20 }} />,
      onClick: (e) => handleClick(e, "Khác"),
      className: "card-small-icon ",
    },
  ];

  return (
    <div className="playing-bar">
      <div
        className="playing-bar__controls"
        style={{ backgroundColor: `${bg.bglayout}` }}
      >
        <div
          className="level playing-bar__controls__container"
          style={{
            backgroundImage: `url(${bg.themePlaying})`,
            backgroundColor: `${bg.playerbg}`,
            borderTop: `${bg.borderPlayer}`,
          }}
        >
          <div className="playing-bar__controls__left level-left">
            <div className="level__item is-narrow">
              <Media
                right={icons}
                item={{
                  artistsNames: "Vương Anh Tú",
                  title: "Cứu Vãn Kịp Không",
                  thumbnailM: "/",
                }}
              />
            </div>
          </div>
          <div className="playing-bar__controls__center">
            <Controls />
          </div>
          <div className="playing-bar__controls__right">
            {iconR.map((item, index) => (
              <div className="level__item is-narrow" key={index}>
                <Action icon={item} className={"pd-3"} />
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
              <Action
                icon={{
                  icon: <PlaylistPlayIcon sx={{ fontSize: 20 }} />,
                  title: "Danh sách phát",
                  onClick: (e) => handleClick(e, "D"),
                  className: "card-small-icon ",
                  customClass: " show-bg-square",
                }}
                className={"pd-3"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayingBar;
