import React from "react";

import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
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
import Button from "../button/Button";
const NextSong = ({ audioRef, tracks }) => {
  const dispatch = useDispatch();

  const handleNext = async () => {
    if (tracks.playingList.length > 0) {
      const indexSong = findIndexSong();
      dispatch(setLyric(""));
      dispatch(setSongId(tracks.playingList[indexSong].encodeId));
      dispatch(
        setSongInfo({
          title: tracks.playingList[indexSong].title,
          thumbnailM: tracks.playingList[indexSong].thumbnailM,
          thumbnail: tracks.playingList[indexSong].thumbnailM,
          artistsNames: tracks.playingList[indexSong].artistsNames,
        })
      );
      await getInfoSong(tracks.playingList[indexSong].encodeId).then((res) => {
        try {
          dispatch(setDurTime(res.data.duration));
        } catch (error) {
          console.log(error);
          return;
        }
      });
      await getSong(tracks.playingList[indexSong].encodeId).then((res) => {
        try {
          dispatch(setSrcAudio(res.data[128]));
        } catch (error) {
          console.log(error);
          return;
        }
      });
      dispatch(togglePlay(true));
      audioRef.current.play();
    } else {
      window.alert("Vui lòng thêm danh sách phát");
    }
    return;
  };
  //nếu bài đang phát có trong ds thì bài tiếp theo = index +1, ngược lại phát bài đầu tiên
  const findIndexSong = () => {
    const songIdx = tracks.playingList.findIndex(
      (e) => e.encodeId === tracks.songId
    );
    if (songIdx !== undefined && songIdx + 1 < tracks.playingList.length) {
      return songIdx + 1;
    } else {
      return 0;
    }
  };
  return (
    <>
      <Button
        className={"is-32 no-bg mg-07"}
        onClick={(e) => handleNext(e)}
        customIcon={"is-hover-circle"}
      >
        <SkipNextRoundedIcon
          sx={{ fontSize: 25, color: "var(--setting-icon-text)" }}
        />
      </Button>
    </>
  );
};

export default NextSong;
