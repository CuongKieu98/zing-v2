import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { actionSelector } from "../../redux/selectors/selectors";
import "./sidebar.scss";

import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import BarChartIcon from "@mui/icons-material/BarChart";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";
import WidgetsIcon from "@mui/icons-material/Widgets";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import YouTubeIcon from "@mui/icons-material/YouTube";
import images from "../../assets/images";

const sibarNav = [
  {
    display: "Cá Nhân",
    path: "/profile",
    icon: <LibraryMusicIcon />,
  },
  {
    display: "Khám Phá",
    path: "/",
    icon: <AutoAwesomeIcon />,
  },
  {
    display: "#zingchart",
    path: "/zing-chart",
    icon: <BarChartIcon />,
  },
  {
    display: "Radio",
    path: "/radio",
    icon: <GraphicEqIcon />,
    img: images.liveimg,
  },
  {
    display: "Theo Dõi",
    path: "/follow",
    icon: <LibraryAddIcon />,
  },
];

const sideBarv2 = [
  {
    display: "Nhạc Mới",
    icon: <MusicVideoIcon />,
    path: "/",
  },
  {
    display: "Thể Loại",
    icon: <WidgetsIcon />,
    path: "/",
  },
  {
    display: "Top 100",
    icon: <StarBorderIcon />,
    path: "/",
  },
  {
    display: "MV",
    icon: <YouTubeIcon />,
    path: "/",
  },
  {
    display: "MV",
    icon: <YouTubeIcon />,
    path: "/",
  },
  {
    display: "MV",
    icon: <YouTubeIcon />,
    path: "/",
  },
  {
    display: "MV",
    icon: <YouTubeIcon />,
    path: "/",
  },
  {
    display: "MV",
    icon: <YouTubeIcon />,
    path: "/",
  },
  {
    display: "MV",
    icon: <YouTubeIcon />,
    path: "/",
  },
];

const SideBar = (props) => {
  const { pathname } = useLocation();
  const active = sibarNav.findIndex((e) => e.path === pathname);

  const bg = useSelector(actionSelector).bgReducer;

  return (
    <div className="sidebar" style={{ backgroundColor: `${bg.bgSidebar}` }}>
      <div className="sidebar__wrapper">
        <nav className="sidebar__wrapper__menu">
          <ul>
            {sibarNav.map((item, index) => (
              <li
                key={index}
                className={`${index === active ? "active" : ""}`}
                style={
                  index === active
                    ? {
                        backgroundColor: `${bg.bgSidebar}`,
                        borderLeft: `${bg.bgSidebarBorderActive}`,
                      }
                    : null
                }
              >
                <Link to={item.path}>
                  <i>{item.icon}</i>
                  <span>
                    {item.display}
                  
                  </span>
                  {item.img && <img className="radio-live" src={item.img} alt="" style={{marginLeft:"8px"}}/>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="sidebar__wrapper__divide"></div>
      <SideBarScroll active={active} />
    </div>
  );
};

const SideBarScroll = (props) => {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "200px",
      }}
    >
      <div className="sidebar-scroll">
        <div className="sidebar__wrapper">
          <nav className="sidebar__wrapper__menu">
            <ul>
              {sideBarv2.map((item, index) => (
                <li
                  key={index}
                  className={`${index === props.active ? "active" : ""}`}
                >
                  <Link to={item.path}>
                    <i>{item.icon}</i>
                    <span>{item.display}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
