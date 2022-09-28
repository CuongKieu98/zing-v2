import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { actionSelector } from "../../redux/selectors/selectors";
import Media from "../media-song/Media";

import "./playlist.scss";

const Playlist = (props) => {
  const reducer = useSelector(actionSelector);
  const bg = reducer.bgReducer;
  const tracks = reducer.audioReducer;
  const itemRef = useRef(null);

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
                <Media audio={item} customImg={"is-40"} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Playlist;
