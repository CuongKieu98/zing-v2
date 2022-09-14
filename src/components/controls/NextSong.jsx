import React from "react";
import Action from "../action/Action";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import { useDispatch } from "react-redux";
import {
  setDurTime,
  setSongId,
  setSongInfo,
  setSrcAudio,
  togglePlay,
} from "../../redux/actions/actions";
import { getInfoSong, getSong } from "../../api/musicApi";
const NextSong = ({ audioRef, tracks }) => {
  const dispatch = useDispatch();

  const handleNext = async () => {

    if (tracks.playingList.length > 0) {
      // audioRef.current.pause();
      // dispatch(togglePlay(false));
      const indexSong = findIndexSong();
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
    }else{
      window.alert("Vui lòng thêm danh sách phát")
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
      <Action
        icon={{
          icon: <SkipNextRoundedIcon sx={{ fontSize: 20 }} />,
          onClick: (e) => handleNext(e, "Khác"),
          className: "card-icon ",
        }}
        className={"mg-07"}
      />
    </>
  );
};

export default NextSong;
