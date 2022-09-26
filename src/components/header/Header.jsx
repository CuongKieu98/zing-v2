import React, { useEffect, useRef, useState } from "react";
import "./header.scss";
import { useLocation } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

import Action from "../action/Action";
import { useDebounce } from "../../hooks";
import { useSelector } from "react-redux";
import Media from "../media/Media";
import { actionSelector } from "../../redux/selectors/selectors";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import Card from "../cards/Card";
import {
  THEME_2,
  THEME_ARTIST,
  THEME_DYNAMIC,
} from "../../assets/fake-data/db";
import { useDispatch } from "react-redux";
import { setColor, setMode } from "../../redux/actions/actions";

const headerNav = [
  {
    display: "Khám Phá",
    path: "/",
  },
  {
    display: "#zingchart",
    path: "/zing-chart",
  },
  {
    display: "Radio",
    path: "/radio",
  },
  {
    display: "PlayList",
    path: "/play-list",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const active = headerNav.findIndex((e) => e.path === pathname);
  const inputRef = useRef(null);
  const [isShow, setIsShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isColapse, setIsColapse] = useState("");
  const [loading, setLoading] = useState(false);
  const reducer = useSelector(actionSelector);
  const bg = reducer.bgReducer;
  const tracks = reducer.audioReducer;
  const ulsRef = useRef();
  const [openDialog, setOpenDialog] = useState(false);

  const debounced = useDebounce(searchValue, 800);

  const handleClear = () => {
    setSearchValue("");
    inputRef.current.focus();
  };
  const onFocusInput = (isFocus) => {
    if (isFocus) {
      setIsColapse("is-copalse");
      setIsShow(true);
    } else {
      setIsColapse("");
      setIsShow(false);
    }
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.getElementsByClassName("main")[0]?.scrollTop > 50 ||
        document.getElementById("boxm")[0]?.scrollTop > 50
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };

    document.getElementById("boxm").addEventListener("scroll", shrinkHeader);
    return () => {
      document
        .getElementById("boxm")
        .removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, !isShow);
    return () => {
      document.removeEventListener("click", handleClickOutside, !isShow);
    };
  }, []);
  const handleClickOutside = (event) => {
    if (inputRef.current && inputRef.current.contains(event.target)) {
      return;
    }
    if (ulsRef.current && !ulsRef.current.contains(event.target)) {
      setIsColapse("");
      setIsShow(false);
    }
  };
  return (
    <div ref={headerRef} className="header">
      <div className="level">
        <div className="level-left">
          <Action
            icon={{
              icon: <ArrowBackIcon sx={{ fontSize: 20 }} />,
              className: "card-icon ",
              customClass: " no-bg",
            }}
            className={"mg-07 hide-on-mobile"}
          />
          <Action
            icon={{
              icon: <ArrowForwardIcon sx={{ fontSize: 20 }} />,
              className: "card-icon ",
              customClass: " no-bg",
            }}
            className={"mg-07 hide-on-mobile"}
          />
          <form className="search">
            <div
              className={"search__container " + isColapse}
            >
              <Action
                icon={{
                  icon: <SearchIcon sx={{ fontSize: 30 ,color:"var(--text-placeholder)"}} />,
                  className: "card-icon ",
                  customClass: " no-bg",
                }}
                className={"mg-07"}
              />
              <div className="input-wrapper">
                <input
                  ref={inputRef}
                  onFocus={() => onFocusInput(true)}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  type="text"
                  className="input-placeholder"
                  placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                />
              </div>
              {searchValue.length > 0 && (
                <Action
                  icon={{
                    icon: <CloseRoundedIcon sx={{ fontSize: 20 }} />,
                    className: "card-icon ",
                    customClass: " no-bg",
                    onClick: handleClear,
                  }}
                  className={"mg-07 icon-close"}
                />
              )}
            </div>

            {isShow && (
              <ul
                className="suggest__list"
                ref={ulsRef}
              >
                <div className="suggest__list__container">
                  <div className="search-title">Gợi ý kết quả</div>
                  <li className="suggest__list__item">
                    <Media item={tracks.infoSong} />
                  </li>
                  <li className="suggest__list__item">
                    <Media item={tracks.infoSong} />
                  </li>
                  <li className="suggest__list__item">
                    <Media item={tracks.infoSong} />
                  </li>
                  <li className="suggest__list__item">
                    <Media item={tracks.infoSong} />
                  </li>
                  <li className="suggest__list__item">
                    <Media item={tracks.infoSong} />
                  </li>
                  <li className="suggest__list__item">
                    <Media item={tracks.infoSong} />
                  </li>
                </div>
              </ul>
            )}
          </form>
        </div>
        <div className="level-right">
          <div className="setting-item">
            <Button
              className={"bg-circle is-40"}
              onClick={handleOpenDialog}
            >
              <ColorLensIcon sx={{ fontSize: 20, color: "var(--setting-icon-text)"  }} />
            </Button>
          </div>
          <div className="setting-item hide-on-mobile">
            <Button
              className={"bg-circle is-40"}
              onClick={() => console.log("gaga")}
            >
              <FileUploadOutlinedIcon
                sx={{ fontSize: 20, color: "var(--setting-icon-text)"  }}
              />
            </Button>
          </div>
          <div className="setting-item hide-on-mobile">
            <Button
              className={"bg-circle is-40"}
              onClick={() => console.log("gaga")}
            >
              <SettingsIcon sx={{ fontSize: 20, color: "var(--setting-icon-text)" }} />
            </Button>
          </div>
          <div className="setting-item">
            <Button
              className={"bg-circle is-40"}
              onClick={() => console.log("gaga")}
            >
              <PersonIcon sx={{ fontSize: 20, color: "var(--setting-icon-text)"  }} />
            </Button>
          </div>
        </div>
      </div>
      <Modal
        onOpen={openDialog}
        onClose={handleCloseDialog}
        title={"Giao Diện"}
      >
        {<Theme onClose={handleCloseDialog}/>}
      </Modal>
    </div>
  );
};

const Theme = (props) => {
  const {onClose} = props;
  const dispatch = useDispatch();
  const [currTheme,setCurrThem] = useState("zma");

  const setTheme = theme =>{
    setCurrThem(theme.id);
    localStorage.setItem('theme',theme.class);
    localStorage.setItem('datatheme',JSON.stringify(theme));
    dispatch(setMode(theme.class))
    dispatch(setColor(theme))
    onClose();
    
  }
  useEffect(() => {

    const allTheme2 = THEME_DYNAMIC.concat(THEME_2,THEME_ARTIST);

    const themeClass = allTheme2.find(e => e.class === localStorage.getItem('theme', 'theme-dynamic-zma'))
     

    if (themeClass !== undefined) setCurrThem(themeClass.id)


}, []);
  return (
    <div className="container-theme">
      <h3 className="title prl-7">Dynamic</h3>
      <div className="columns is-mutiline">
        {THEME_DYNAMIC.map((item, index) => (
          <div className="column theme-modal mb-2" key={index}>
            <Card
              image={item.img}
              className=""
              customImg=""
              content={item.title}
              onClick={() => setTheme(item)}
            />
          </div>
        ))}
      </div>
      <h3 className="title prl-7">Chủ Đề</h3>
      <div className="columns is-mutiline">
        {THEME_2.map((item, index) => (
          <div className="column theme-modal mb-2" key={index}>
            <Card
              image={item.img}
              className=""
              customImg=""
              content={item.title}
              onClick={() => setTheme(item)}
            />
          </div>
        ))}
      </div>
      <h3 className="title prl-7">Nghệ Sĩ</h3>
      <div className="columns is-mutiline">
        {THEME_ARTIST.map((item, index) => (
          <div className="column theme-modal mb-2" key={index}>
            <Card
              image={item.img}
              className=""
              customImg=""
              content={item.title}
              onClick={() => setTheme(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
