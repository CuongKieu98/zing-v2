import React, { useState } from "react";
import Action from "../../action/Action";
import "./nowplaying.scss";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

import TuneIcon from "@mui/icons-material/Tune";
import SettingsVoiceIcon from "@mui/icons-material/SettingsVoice";

import { useEffect } from "react";
import Lyric from "../../lyric/Lyric";
import { getLyric } from "../../../api/musicApi";
import { useDispatch } from "react-redux";
import { setLyric } from "../../../redux/actions/actions";
import Button from "../../button/Button";

const NowPlaying = (props) => {
  const { tracks, theme, onClick } = props;
  const [dataLyric, setDataLyric] = useState([]);
  const [activeTab, setActiveTab] = useState(1);

  const dispatch = useDispatch();
  const handleChangeTab = (value) => {
    if (activeTab === value) return;
    setActiveTab(value);
    if (value === 2) {
      if (tracks.lyric !== "") {
        setLyric(tracks.lyric);
        parseFile(tracks.lyric);
      } else {
        getLyric(tracks.songId).then((res) => {
          try {
            dispatch(setLyric(res.data.file));
            parseFile(res.data.file);
          } catch (error) {
            console.log(error);
            return;
          }
        });
      }
    }
  };

  useEffect(() => {
    setActiveTab(1);
  }, [tracks.songId]);
  const parseFile = (filePath) => {
    if (filePath && filePath !== null && filePath !== "") {
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
        style={{
          backgroundImage: `url(${theme.color?.background})`,
          backgroundColor: "var(--layout-bg)",
          backgroundRepeat: "repeat",
          backgroundSize: "1920px auto",
        }}
      ></div>
      <div className="np__content">
        <div className="np__content__header">
          <div className="left">
            <div className="level">
              <div className="level__item"></div>
            </div>
          </div>
          <ul className="tabs">
            <li
              className={"tabs-item " + (activeTab === 1 ? "is-active" : "")}
              value={1}
              onClick={() => handleChangeTab(1)}
            >
              Danh sách phát
            </li>
            <li
              className={"tabs-item " + (activeTab === 2 ? "is-active" : "")}
              value={2}
              onClick={() => handleChangeTab(2)}
            >
              Lời bài hát
            </li>
          </ul>
          <div className="right">
            <div className="level">
              <div className="level__item">
                <Button
                  className={"circle-bg mg-07 nowpl-show"}
                  customIcon={"is-hover-circle"}
                  onClick={onClick}
                >
                  <ExpandMoreRoundedIcon
                    sx={{ fontSize: 30, color: "var(--setting-icon-text)" }}
                  />
                </Button>
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
                      <figure
                        className={
                          "card__content__img " +
                          (tracks.isPlay ? "playing" : "")
                        }
                      >
                        <img src={tracks.infoSong.thumbnailM} alt="" />
                      </figure>
                    </div>
                  </div>
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
