import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./media.scss";
import { useDispatch, useSelector } from "react-redux";
import { actionSelector } from "../../redux/selectors/selectors";
import { Tooltip } from "@mui/material";
import Action from "../action/Action";

//icon
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import images from "../../assets/images";
import {
  setDurTime,
  setSongId,
  setSongInfo,
  setSrcAudio,
} from "../../redux/actions/actions";
import { getInfoSong, getSong } from "../../api/musicApi";
import { useState } from "react";
import { PlaceOutlined } from "@mui/icons-material";

const Media = (props) => {
  const { left, right, item, tracks,className } = props;
  const dispatch = useDispatch();
  const numRef = useRef(null);
  const bg = useSelector(actionSelector).bgReducer;
  
  const [loading, setLoading] = useState(false);
  const [playing,setPlaying] = useState(false);
  const classImg = className ? className : "";
  useEffect(() =>{
    if(tracks && item.encodeId === tracks.songId && tracks.isPlay){
      setPlaying(true);
    }
    else{
      setPlaying(false)
    }
  },[item.encodeId, playing, tracks])

  const handlePlay = async (e) => {
    if (tracks.songId === item.encodeId && tracks.isPlay) {
      return;
    } else {
      setLoading(true);
      dispatch(setSongId(item.encodeId));
      dispatch(
        setSongInfo({
          title: item.title,
          thumbnailM: item.thumbnailM,
          thumbnail: item.thumbnailM,
          artistsNames: item.artistsNames,
        })
      );
      await getInfoSong(item.encodeId).then((res) => {
        dispatch(setDurTime(res.data.duration));
      });
      await getSong(item.encodeId).then((res) => {
        try {
          dispatch(setSrcAudio(res.data[128]));
        } catch (error) {
          console.log(error);
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

  return (
    <div className="media">
      <div className="media__left">
        {left && (
          <div className="media__left__rank mr-15">
            <span className={"number"} ref={numRef}>
              {left.rank}
            </span>
          </div>
        )}
        {/*start img in bar */}
        <Link to={"/"}>
          <div className="media__thumb">
            <figure style={{ backgroundColor: `${bg.bglayout}` }} className={className}>
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
        </Link>
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
        </div>
      </div>
    </div>
  );
};

export default Media;
