import React from "react";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import {
  setDurTime,
  setLyric,
  setSongId,
  setSongInfo,
  setSrcAudio,
  togglePlay,
} from "../../redux/actions/actions";
import { getInfoSong, getSong } from "../../api/musicApi";
import TYPE_PLAYLIST from "../../consts/TYPE_PLAYLIST";
const Previous = ({ audioRef, tracks }) => {
  const dispatch = useDispatch();
  const typePlaylist = tracks.type;

  const handlePrev = async () => {
    if (typePlaylist === TYPE_PLAYLIST.MYPLAYLIST) {
      PrevSongLocal();
    } else if (typePlaylist === TYPE_PLAYLIST.ZINGCHART) {
      PrevSongWithApi();
    } else {
      window.alert("Có lỗi xảy ra!");
    }
    return;
  };

  const PrevSongLocal =() =>{
    if (tracks.playingList.length > 0) {
      const indexSong = findIndexSong();
      dispatch(setSongId(tracks.playingList[indexSong].encodeId));
      dispatch(setDurTime(tracks.playingList[indexSong].duration));
      dispatch(setSrcAudio(tracks.playingList[indexSong].srcAudio));
      dispatch(setLyric(tracks.playingList[indexSong].lyric));
      dispatch(
        setSongInfo({
          encodeId: tracks.playingList[indexSong].encodeId,
          title: tracks.playingList[indexSong].title,
          thumbnailM: tracks.playingList[indexSong].thumbnailM,
          thumbnail: tracks.playingList[indexSong].thumbnailM,
          artistsNames: tracks.playingList[indexSong].artistsNames,
          album: {
            encodeId: tracks.playingList[indexSong].album.encodeId,
            title: tracks.playingList[indexSong].album.title,
          },
          srcAudio: tracks.playingList[indexSong].srcAudio,
          currentTime: tracks.playingList[indexSong].currentTime,
          duration: tracks.playingList[indexSong].duration,
          lyric: tracks.playingList[indexSong].lyric,
        })
      );

      dispatch(togglePlay(true));
    } else {
      window.alert("Vui lòng thêm danh sách phát");
    }
  }
  const PrevSongWithApi = async () =>{
    try {
      if (tracks.playingList.length > 0) {
        const indexSong = findIndexSong();
        const durr = await getInfoSong(tracks.playingList[indexSong].encodeId);
        const srcAud = await getSong(tracks.playingList[indexSong].encodeId);
        dispatch(setSongId(tracks.playingList[indexSong].encodeId));
        dispatch(setDurTime(durr.data.duration));
        dispatch(setSrcAudio(srcAud.data[128]));
        dispatch(setLyric(""));
        dispatch(
          setSongInfo({
            encodeId: tracks.playingList[indexSong].encodeId,
            title: tracks.playingList[indexSong].title,
            thumbnailM: tracks.playingList[indexSong].thumbnailM,
            thumbnail: tracks.playingList[indexSong].thumbnailM,
            artistsNames: tracks.playingList[indexSong].artistsNames,
            album: {},
            srcAudio: srcAud,
            currentTime: 0,
            duration: durr,
            lyric: "",
          })
        );

        dispatch(togglePlay(true));
      } else {
        window.alert("Vui lòng thêm danh sách phát");
      }
    } catch (error) {
      console.log(error);
    }
  }

  //nếu bài đang phát có trong ds thì bài tiếp theo = index +1, ngược lại phát bài đầu tiên
  const findIndexSong = () => {
    const songIdx = tracks.playingList.findIndex(
      (e) => e.encodeId === tracks.songId
    );
    if (songIdx !== undefined && songIdx - 1 >= 0) {
      return songIdx - 1;
    } else {
      return 0;
    }
  };
  return (
    <>
      <Button
        className={"is-32 no-bg mg-07 hide-on-mobile"}
        onClick={(e) => handlePrev(e)}
        customIcon={"is-hover-circle"}
      >
        <SkipPreviousRoundedIcon
          sx={{ fontSize: 25, color: "var(--setting-icon-text)" }}
        />
      </Button>
    </>
  );
};

export default Previous;
