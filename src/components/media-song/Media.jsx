import React, { useEffect } from "react";
import "./media.scss";
import Button from "../button/Button";

import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import SettingsVoiceRoundedIcon from "@mui/icons-material/SettingsVoiceRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";
import images from "../../assets/images";
import { useDispatch } from "react-redux";

const Media = (props) => {
  const {
    prefixType,
    rightType,
    customImg,
    audio,
    className,
    onPlay,
    tracks,
    onPause,
  } = props;
  const dispatch = useDispatch();
  const isNowPlaying = tracks.infoSong.encodeId === audio.encodeId;

  // useEffect(() =>{

  // },[audio.isPlay])

  return (
    <div className="media-song">
      {/* left */}
      <div className="media-song-left">
        <div className="song-prefix">
          <MusicNoteRoundedIcon
            sx={{ fontSize: 18, color: "var(--setting-icon-text)" }}
          />
        </div>
        <div className="song-thumb">
          <figure className={"image " + customImg}>
            <img src={audio.thumbnailM} alt="" />
          </figure>
          <div className="opacity"></div>
          <div className="action-items">
            <div className="thumb-action">
              {tracks.isPlay && isNowPlaying ? (
                <img
                  className="action__playing"
                  src={images.iconplaying}
                  alt=""
                  onClick={onPause}
                />
              ) : (
                <Button
                  className={"is-32 no-bg "}
                  customIcon={"is-hover-circle"}
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
      <div className="media-song-center">
        <div className="album-info">
          <h3 className="subtitle">{audio.album.title}</h3>
        </div>
      </div>
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
            <div className="level-item duration">03:20</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
