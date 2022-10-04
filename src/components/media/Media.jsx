import React, { useRef, useEffect } from "react";
import "./media.scss";
import { useDispatch, useSelector } from "react-redux";
import { actionSelector } from "../../redux/selectors/selectors";
import Action from "../action/Action";

//icon
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import images from "../../assets/images";
import {
  setDurTime,
  setLoading,
  setLyric,
  setSongId,
  setSongInfo,
  setSrcAudio,
  setType,
  togglePlay,
} from "../../redux/actions/actions";
import { getInfoSong, getSong } from "../../api/musicApi";
import { useState } from "react";
import stringUtils from "../../utils/stringUtils";
import TYPE_PLAYLIST from "../../consts/TYPE_PLAYLIST";

const Media = (props) => {
  const {
    left,
    right,
    item,
    tracks,
    className,
    sort = false,
    time = false,
    type,
  } = props;
  const dispatch = useDispatch();
  const numRef = useRef(null);
  const bg = useSelector(actionSelector).bgReducer;

  const [playing, setPlaying] = useState(false);
  const loading = tracks && item.encodeId === tracks.songId && tracks.isLoading;
  useEffect(() => {
    if (tracks && item.encodeId === tracks.songId && tracks.isPlay) {
      setPlaying(true);
    } else {
      setPlaying(false);
    }
  }, [item.encodeId, playing, tracks]);

  const handlePlay = () => {
    if (item.encodeId === tracks?.songId) {
      dispatch(togglePlay(true));
    } else {
      if (type === TYPE_PLAYLIST.MYPLAYLIST) {
        playSongLocal(item);
      } else if (type === TYPE_PLAYLIST.ZINGCHART) {
        playSongWithApi(item);
      }
    }
  };

  const playSongLocal = () => {
    dispatch(setSongId(item.encodeId));
    dispatch(setDurTime(item.duration));
    dispatch(setSrcAudio(item.srcAudio));
    dispatch(setLyric(item.lyric));
    dispatch(setType(type));
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
      dispatch(setDurTime(durr.data.duration));
      dispatch(setSrcAudio(srcAud.data[128]));
      dispatch(setLyric(""));
      dispatch(setType(type));
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

  useEffect(() => {
    if (left && (left.rank === 1 || left.rank === 2 || left.rank === 3)) {
      numRef.current.classList.add(`top-${left.rank}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const SortIcon = () => {
    if (item.rakingStatus > 0) {
      return <ArrowDropUpIcon sx={{ color: "#1dc186" }} />;
    } else if (item.rakingStatus < 0) {
      return <ArrowDropDownIcon sx={{ color: "#e35050" }} />;
    } else {
      return <RemoveIcon />;
    }
  };

  return (
    <div className="media">
      <div className="media__left">
        {left && (
          <div className="media__left__rank mr-15">
            <span className={"number"} ref={numRef}>
              {left.rank}
            </span>
            {sort && (
              <div className="sort">
                <SortIcon />
                {item.rakingStatus !== 0 && (
                  <div className="sort-num">
                    {item.rakingStatus > 0
                      ? item.rakingStatus
                      : item.rakingStatus * -1}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        {/*start img in bar */}
        <div className="media__thumb">
          <figure
            style={{ backgroundColor: `${bg.bglayout}` }}
            className={className}
          >
            <img src={item.thumbnailM} alt="" />
          </figure>
          <div className="opacity"></div>
          <div className="media__action">
            {loading ? (
              <img
                className="media__action__loading"
                src={images.spiner}
                alt=""
              />
            ) : playing ? (
              <img
                className="media__action__playing"
                src={images.iconplaying}
                alt=""
              />
            ) : (
              <Action
                icon={{
                  icon: <PlayArrowRoundedIcon sx={{ fontSize: 30 }} />,
                  onClick: handlePlay,
                  customClass: " no-bg",
                }}
                className="center"
              />
            )}
          </div>
        </div>
        {/*end img in bar */}
        <div className="media__content ">
          <h3 className="is-mark level-left">{item.title}</h3>
          <h4 className="is-mark">{item.artistsNames}</h4>
        </div>
      </div>
      <div className="media__right">
        <div className="level">
          {right?.map((icon, index) => (
            <div className="level__item" key={index}>
              <Action icon={icon} className={"pd-3"} />
            </div>
          ))}
          {time && (
            <div className="duration">
              {stringUtils.formatDuration(item.duration)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Media;
