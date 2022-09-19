import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./media.scss";
import { useDispatch, useSelector } from "react-redux";
import { actionSelector } from "../../redux/selectors/selectors";
import { Tooltip } from "@mui/material";
import Action from "../action/Action";

//icon
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import images from "../../assets/images";
import {
  setDurTime,
  setLyric,
  setPlayList,
  setSongId,
  setSongInfo,
  setSrcAudio,
} from "../../redux/actions/actions";
import { getInfoSong, getLyric, getSong } from "../../api/musicApi";
import { useState } from "react";
import { PlaceOutlined } from "@mui/icons-material";
import stringUtils from "../../utils/stringUtils";

const Media = (props) => {
  const {
    left,
    right,
    item,
    tracks,
    className,
    sort = false,
    time = false,
  } = props;
  const dispatch = useDispatch();
  const numRef = useRef(null);
  const bg = useSelector(actionSelector).bgReducer;

  const [loading, setLoading] = useState(false);
  const [playing, setPlaying] = useState(false);
  const classImg = className ? className : "";
  useEffect(() => {
    if (tracks && item.encodeId === tracks.songId && tracks.isPlay) {
      setPlaying(true);
    } else {
      setPlaying(false);
    }
  }, [item.encodeId, playing, tracks]);

  const Duplicate = (value) => {
    const found = tracks.playingList.find((el) => el.encodeId === value);
    if (!found) {
      dispatch(
        setPlayList({
          encodeId: item.encodeId,
          title: item.title,
          thumbnailM: item.thumbnailM,
          thumbnail: item.thumbnail,
          artistsNames: item.artistsNames,
        })
      );
    }
  };

  const handlePlay = async (e) => {
    if (tracks.songId === item.encodeId && tracks.isPlay) {
      return;
    } else {
      setLoading(true);
      dispatch(setSongId(item.encodeId));
      Duplicate(item.encodeId);

      dispatch(
        setSongInfo({
          title: item.title,
          thumbnailM: item.thumbnailM,
          thumbnail: item.thumbnailM,
          artistsNames: item.artistsNames,
        })
      );
      await getInfoSong(item.encodeId).then((res) => {
        try {
          dispatch(setDurTime(res.data.duration));
        } catch (error) {
          console.log(error);
          setLoading(false);
          return;
        }
      });
      await getLyric(item.encodeId).then((res) => {
        try {
          dispatch(setLyric(res.data.file));
        } catch (error) {
          console.log(error);
          setLoading(false);
          return;
        }
      });
      await getSong(item.encodeId).then((res) => {
        try {
          dispatch(setSrcAudio(res.data[128]));
        } catch (error) {
          console.log(error);
          setLoading(false);
          return;
        }
      });
 
      setLoading(false);
    }
  };

  useEffect(() => {
    if (left && (left.rank === 1 || left.rank === 2 || left.rank === 3)) {
      numRef.current.classList.add(`top-${left.rank}`);
    }
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
          <h4 className="is-mark">
            <Link to={"/"}>{item.artistsNames}</Link>
          </h4>
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
