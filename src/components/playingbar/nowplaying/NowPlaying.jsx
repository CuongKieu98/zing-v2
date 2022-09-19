import React, { useState } from "react";
import Action from "../../action/Action";
import "./nowplaying.scss";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { useSelector } from "react-redux";
import { actionSelector } from "../../../redux/selectors/selectors";
import images from "../../../assets/images";
import stringUtils from "../../../utils/stringUtils";
import { useEffect } from "react";
import Lyric from "../../lyric/Lyric";

const NowPlaying = (props) => {
  const { bg, tracks, onClick } = props;
  const [dataLyric, setDataLyric] = useState([]);
  const [lyric, setLyric] = useState("");
  const [activeTab, setActiveTab] = useState(1);
  // const dataL = dataLyric.map(item => item[0])

  // const dataMap = (data) =>{
  //     console.log(data)

  //   data.map((item,index) =>(
  //     console.log(item[0])
  //   ) )
  // }
  // console.log(dataMap(dataLyric));

  // useEffect(() =>{
  //   if(dataLyric.length > 0){
  //     let data2 = dataL.findLast(it => it.time.slice(0, -3) <= tracks.currentTime)
  //     setLyric(data2?.lyric || "");
  //   }
  //   return

  // },[tracks.currentTime])

  const handleChangeTab = (value) => {
    if (activeTab === value) return;
    setActiveTab(value);
  };

  useEffect(() => {
    parseFile(tracks.lyric.length > 0 && tracks.lyric);
  }, [tracks.lyric]);
  const parseFile = (filePath) => {
    if (filePath && filePath !== null) {
      fetch(filePath)
        .then((res) => res.text())
        .then((data) => {
          let dataLrc = data.split("\n").map((text, index) => [
            {
              time: text.replace(/(^.*\[|\].*$)/g, ""),
              lyric: text.replace(/ *\[[^\]]*]/, "").trim(),
            },
          ]);
          setDataLyric(dataLrc);
        });
    } else {
      return "";
    }
  };
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
            <li
              className="tabs-item is-active"
              value={1}
              onClick={() => handleChangeTab(1)}
            >
              Danh sách phát
            </li>
            <li
              className="tabs-item "
              value={2}
              onClick={() => handleChangeTab(2)}
            >
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
        {activeTab === 1 ? (
          <>
            <div className="np__content__body">
              <div className="body__list">
                <div className="body__list__wrapper">
                  <div className="wrapper__content">
                    <div className="wrapper__content__card">
                      <figure className="card__content__img">
                        <img src={images.test3} alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="np__content__bottom">
              <div className="content__text">
                <div className="content_text_title">
                  <span>{lyric}</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <Lyric data={dataLyric} tracks={tracks} />
          </>
        )}
      </div>
    </div>
  );
};

export default NowPlaying;
