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
const Previous = ({ audioRef, tracks }) => {
  const dispatch = useDispatch();

  const handlePrev = async () => {
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
      try {
        Promise.all([
          await getInfoSong(tracks.playingList[indexSong].encodeId).then(
            (res) => {
              try {
                dispatch(setDurTime(res.data.duration));
              } catch (error) {
                console.log(error);
                return;
              }
            }
          ),
          await getSong(tracks.playingList[indexSong].encodeId).then((res) => {
            try {
              dispatch(setSrcAudio(res.data[128]));
            } catch (error) {
              console.log(error);
              return;
            }
          }),
        ]);
      } catch (error) {
        console.log(error);
      }

      dispatch(togglePlay(true));
      audioRef.current.play();
    } else {
      return;
    }
    return;
  };

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
