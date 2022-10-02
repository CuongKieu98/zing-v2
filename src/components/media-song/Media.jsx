import React, { useEffect, useRef } from "react";
import "./media.scss";
import Button from "../button/Button";

import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import SettingsVoiceRoundedIcon from "@mui/icons-material/SettingsVoiceRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import images from "../../assets/images";
import { useDispatch } from "react-redux";
import CARD_TYPE from "../../consts/CARD_TYPE";
import stringUtils from "../../utils/stringUtils";

const Media = (props) => {
  const {
    index,
    prefixType,
    rightType,
    customImg,
    audio,
    className,
    onPlay,
    tracks,
    onPause,
    loadingApi,
  } = props;
  const dispatch = useDispatch();
  const isNowPlaying = tracks.infoSong.encodeId === audio.encodeId;
  // useEffect(() =>{

  // },[audio.isPlay])

  return (
    <div className="media-song">
      {/* left */}
      <div className="media-song-left">
        {prefixType && (
          <SongPrefix type={prefixType} audio={audio} rank={index} />
        )}
        <div className="song-thumb">
          <figure className={"image " + customImg}>
            <img src={audio.thumbnailM} alt="" />
          </figure>
          <div className="opacity"></div>
          <div className="action-items">
            <div className="thumb-action">
              {tracks.isLoading ? (
                <img
                  className="media__action__loading"
                  src={images.spiner}
                  alt=""
                />
              ) : tracks.isPlay && isNowPlaying ? (
                <img
                  className="action__playing"
                  src={images.iconplaying}
                  alt=""
                  onClick={onPause}
                />
              ) : (
                <Button
                  className={"is-32 no-bg "}
                  customIcon={""}
                  onClick={() => onPlay(audio)}
                >
                  <PlayArrowRoundedIcon
                    sx={{ fontSize: 25, color: "var(--setting-icon-text)" }}
                  />
                </Button>
              )}
            </div>
          </div>
        </div>
        <div className="song-info">
          <div className="title-wrapper">
            <span className="title-item">
              <span className="title">{audio.title}</span>
            </span>
          </div>
          <div className="subtitle-wrapper">
            <span className="subtitle">{audio.artistsNames}</span>
          </div>
        </div>
      </div>
      {/* center */}
      {audio.album && (
        <div className="media-song-center">
          <div className="album-info">
            <h3 className="subtitle">{audio.album.title}</h3>
          </div>
        </div>
      )}
      {/* right */}
      <div className="media-song-right">
        <div className="hover-items">
          <div className="level">
            <div className="level-item">
              <Button className={"is-40 no-bg "} customIcon={"is-hover-circle"}>
                <SettingsVoiceRoundedIcon
                  sx={{ fontSize: 20, color: "var(--setting-icon-text)" }}
                />
              </Button>
            </div>
            <div className="level-item">
              <Button className={"is-40 no-bg "} customIcon={"is-hover-circle"}>
                <FavoriteBorderRoundedIcon
                  sx={{ fontSize: 20, color: "var(--setting-icon-text)" }}
                />
              </Button>
            </div>
            <div className="level-item">
              <Button className={"is-40 no-bg "} customIcon={"is-hover-circle"}>
                <MoreHorizRoundedIcon
                  sx={{ fontSize: 20, color: "var(--setting-icon-text)" }}
                />
              </Button>
            </div>
          </div>
        </div>
        <div className="right-action-items">
          <div className="level">
            <div className="level-item duration">
              {stringUtils.formatDuration(audio.duration)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SongPrefix = ({ type, rank, audio }) => {
  const numRef = useRef(null);
  useEffect(() => {
    if (rank && (rank === 1 || rank === 2 || rank === 3)) {
      numRef?.current?.classList.add(`top-${rank}`);
    }
  }, []);
  const SortIcon = () => {
    if (audio && audio.rakingStatus > 0) {
      return <ArrowDropUpIcon sx={{ color: "#1dc186" }} />;
    } else if (audio && audio.rakingStatus < 0) {
      return <ArrowDropDownIcon sx={{ color: "#e35050" }} />;
    } else {
      return <RemoveIcon />;
    }
  };

  return (
    <div className="song-prefix">
      {type === CARD_TYPE.iconSong ? (
        <MusicNoteRoundedIcon
          sx={{ fontSize: 18, color: "var(--setting-icon-text)" }}
        />
      ) : (
        <>
          <span className="number" ref={numRef}>
            {rank}
          </span>
          <div className="sort">
            <SortIcon />
            {audio.rakingStatus !== 0 && (
              <div className="sort-num">
                {audio.rakingStatus > 0
                  ? audio.rakingStatus
                  : audio.rakingStatus * -1}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Media;
