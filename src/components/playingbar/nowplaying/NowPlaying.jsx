import React from "react";
import Action from "../../action/Action";
import "./nowplaying.scss";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { useSelector } from "react-redux";
import { actionSelector } from "../../../redux/selectors/selectors";
import images from "../../../assets/images";

const NowPlaying = (props) => {
  const { bg, tracks } = props;

  return (
    <div className="now-playing">
      <div
        className="now-playing-bg"
        style={{ backgroundImage: `url(${bg.bg})` }}
      ></div>
      <div className="np__content">
        <div className="np__content__header">
          <div className="left">
            <div className="level">
              <div className="level__item">
                <button className="left__btn">
                  <Action
                    icon={{
                      icon: <ExpandMoreRoundedIcon sx={{ fontSize: 20 }} />,
                      className: "card-icon ",
                    }}
                  />
                </button>
              </div>
              <div className="left-content">
                <div className="title">
                  <h3>Em nên Dừng lại</h3>
                </div>
                <div className="subtitle">
                  <h4>Khang Việt</h4>
                </div>
              </div>
            </div>
          </div>
          <ul className="tabs">
              <li className="tabs-item is-active">
                Danh sách phát
              </li>
              <li className="tabs-item ">
                Lời bài hát
              </li>
          </ul>
          <div className="right">
          <div className="level">
              <div className="level__item">
                <button className="left__btn">
                  <Action
                    icon={{
                      icon: <MoreVertRoundedIcon sx={{ fontSize: 20 }} />,
                      className: "card-icon ",
                    }}
                  />
                </button>
              </div>
              
            </div>
          </div>
        </div>
        <div className="np__content__body">
          <div className="card__content">
                <figure className="card__content__img">
                  <img src={images.test3} alt="" />
                </figure>
          </div>
        </div>
        <div className="np__content__bottom"></div>
      </div>
    </div>
  );
};

export default NowPlaying;
