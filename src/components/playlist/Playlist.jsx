import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  setDurTime,
  setLyric,
  setSongId,
  setSongInfo,
  setSrcAudio,
  togglePlay,
} from "../../redux/actions/actions";
import { actionSelector } from "../../redux/selectors/selectors";
import Media from "../media-song/Media";

import "./playlist.scss";

const Playlist = (props) => {
  const reducer = useSelector(actionSelector);
  const tracks = reducer.audioReducer;
  const dispatch = useDispatch();

  const handlePlay = (item) => {
    if (item.encodeId === tracks.songId) {
      dispatch(togglePlay(true));
    } else {
      dispatch(setSongId(item.encodeId));
      dispatch(setDurTime(item.duration));
      dispatch(setSrcAudio(item.srcAudio));
      dispatch(setLyric(item.lyric));
      dispatch(
        setSongInfo({
          encodeId: item.encodeId,
          title: item.title,
          thumbnailM: item.thumbnailM,
          thumbnail: item.thumbnailM,
          artistsNames: item.artistsNames,
          album: {
            encodeId: item.album.encodeId,
            title: item.album.title,
          },
          srcAudio: item.srcAudio,
          currentTime: item.currentTime,
          duration: item.duration,
          lyric: item.lyric,
        })
      );
      dispatch(togglePlay(true));
    }
  };

  const handlePause =(item) =>{
    dispatch(togglePlay(false));
  }

  return (
    <div className="playlist">
      <div className="playlist__header">
        <div className="playlist__header__left">
          <h4 className="playlist-title">BÀI HÁT</h4>
        </div>
        <div className="playlist__header__center">
          <h4 className="playlist-title">ALBUM</h4>
        </div>
        <div className="playlist__header__right">
          <h4 className="playlist-title">THỜI GIAN</h4>
        </div>
      </div>
      <div className="playlist__content">
        {tracks.playingList &&
          tracks.playingList.map((item, index) => (
            <div className="playlist__content__item" key={index}>
              <div
                className={
                  "list-item" +
                  (tracks.songId === item.encodeId ? " active" : "")
                }
              >
                <Media
                  audio={item}
                  customImg={"is-40"}
                  onPlay={handlePlay}
                  onPause={handlePause}
                  tracks={tracks}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Playlist;
