import React from "react";
import { useSelector } from "react-redux";
import { actionSelector } from "../../redux/selectors/selectors";
import Media from "../media/Media";
import "./playlist.scss";

const Playlist = (props) => {
    const reducer = useSelector(actionSelector);
    const bg = reducer.bgReducer;
    const tracks = reducer.audioReducer;

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
            <div className="playlist__content__item">
                <div className="list-item">
                <Media item={tracks.infoSong} className={"is-40"}/>
                </div>
            </div>
            <div className="playlist__content__item">
                <div className="list-item">
                <Media item={tracks.infoSong} className={"is-40"}/>
                </div>
            </div>
            <div className="playlist__content__item">
                <div className="list-item">
                <Media item={tracks.infoSong} className={"is-40"}/>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Playlist;
