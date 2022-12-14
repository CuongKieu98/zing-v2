import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getInfoSong, getSong } from "../../api/musicApi";
import TYPE_PLAYLIST from "../../consts/TYPE_PLAYLIST";
import {
  setDurTime,
  setLoading,
  setLyric,
  setPlayList,
  setSongId,
  setSongInfo,
  setSrcAudio,
  setType,
  togglePlay,
} from "../../redux/actions/actions";
import { actionSelector } from "../../redux/selectors/selectors";
import Media from "../media-song/Media";

import "./playlist.scss";

const Playlist = (props) => {
  const { type, playlist, prefixType } = props;
  const reducer = useSelector(actionSelector);
  const tracks = reducer.audioReducer;
  const dispatch = useDispatch();
  const handlePlay = (item) => {
    if (item.encodeId === tracks.songId) {
      dispatch(togglePlay(true));
    } else {
      if (type === TYPE_PLAYLIST.MYPLAYLIST) {
        playSongLocal(item);
      } else if (type === TYPE_PLAYLIST.ZINGCHART) {
        playSongWithApi(item);
      }
    }
  };

  const playSongLocal = (item) => {
    dispatch(setSongId(item.encodeId));
    dispatch(setDurTime(item.duration));
    dispatch(setSrcAudio(item.srcAudio));
    dispatch(setLyric(item.lyric));
    dispatch(setType(type));
    dispatch(setPlayList(playlist));
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
  };

  const playSongWithApi = async (item) => {
    try {
      dispatch(setSongId(item.encodeId));
      dispatch(setLoading(true));
      const durr = await getInfoSong(item.encodeId);
      const srcAud = await getSong(item.encodeId);
      if (srcAud.data[128]) {
        dispatch(setSrcAudio(srcAud.data[128]));
      } else {
        return alert(srcAud);
      }
      dispatch(setDurTime(durr.data.duration));
      dispatch(setLyric(""));
      dispatch(setType(type));
      dispatch(setPlayList(playlist));
      dispatch(
        setSongInfo({
          encodeId: item.encodeId,
          title: item.title,
          thumbnailM: item.thumbnailM,
          thumbnail: item.thumbnailM,
          artistsNames: item.artistsNames,
          album: {},
          srcAudio: srcAud,
          currentTime: 0,
          duration: durr,
          lyric: "",
        })
      );
      dispatch(togglePlay(true));
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  };

  const handlePause = () => {
    dispatch(togglePlay(false));
  };


  return (
    <div className="playlist">
      <div className="playlist__header">
        <div className="playlist__header__left">
          <h4 className="playlist-title">B??I H??T</h4>
        </div>
        <div className="playlist__header__center">
          <h4 className="playlist-title">ALBUM</h4>
        </div>
        <div className="playlist__header__right">
          <h4 className="playlist-title">TH???I GIAN</h4>
        </div>
      </div>
      <div className="playlist__content">
        {playlist &&
          playlist.map((item, index) => (
            <div className="playlist__content__item" key={index}>
              <div
                className={
                  "list-item" +
                  (tracks.songId === item.encodeId ? " active" : "")
                }
                id={item.encodeId}
              >
                <Media
                  index={index + 1}
                  audio={item}
                  customImg={"is-40"}
                  onPlay={handlePlay}
                  onPause={handlePause}
                  tracks={tracks}
                  prefixType={prefixType}
                  isLoading={item.encodeId === tracks.songId}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Playlist;
