import React, { useState } from "react";
import Action from "../../action/Action";
import "./nowplaying.scss";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import LyricsIcon from "@mui/icons-material/Lyrics";
import TuneIcon from "@mui/icons-material/Tune";
import { useSelector } from "react-redux";
import { actionSelector } from "../../../redux/selectors/selectors";
import images from "../../../assets/images";
import stringUtils from "../../../utils/stringUtils";
import { useEffect } from "react";
import Lyric from "../../lyric/Lyric";
import { getLyric } from "../../../api/musicApi";
import { useDispatch } from "react-redux";
import { setLyric } from "../../../redux/actions/actions";

const NowPlaying = (props) => {
  const { bg, tracks, theme, onClick } = props;
  const [dataLyric, setDataLyric] = useState([]);
  const [lyrics, setLyrics] = useState("");
  const [activeTab, setActiveTab] = useState(1);

  const dispatch = useDispatch();

  const handleChangeTab = (value) => {
    if (activeTab === value) return;
    setActiveTab(value);
    if (value === 2 ) {
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
              <div className="level__item">
                <button className="left__btn">
                  <Action
                    icon={{
                      icon: <ExpandMoreRoundedIcon sx={{ fontSize: 20 }} />,
                      className: "card-icon ",
                      onClick: onClick,
                    }}
                  />
                </button>
              </div>
              <div className="left-content">
                <h3 className="title" style={{ marginBottom: "0" }}>
                  {tracks.infoSong.title}
                </h3>
                <h4 className="subtitle">{tracks.infoSong.artistsNames}</h4>
              </div>
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
                <button className="left__btn">
                  {activeTab === 1 ? (
                    <Action
                      icon={{
                        icon: <LyricsIcon sx={{ fontSize: 20 }} />,
                        className: "card-icon ",
                        onClick: () => handleChangeTab(2),
                      }}
                    />
                  ) : (
                    <Action
                      icon={{
                        icon: <TuneIcon sx={{ fontSize: 20 }} />,
                        className: "card-icon ",
                        onClick: () => handleChangeTab(1),
                      }}
                    />
                  )}
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
                        <img src={tracks.infoSong.thumbnailM} alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="np__content__bottom">
              <div className="content__text">
                <div className="content_text_title">
                  <span>{lyrics}</span>
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
