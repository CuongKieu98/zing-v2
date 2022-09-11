import React, { useEffect, useRef } from "react";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/tmovie.png";

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

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.getElementsByClassName("main")[0]?.scrollTop > 100 ||
        document.getElementById("boxm")[0]?.scrollTop > 100
      ) {
      
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
  
    document.getElementById("boxm").addEventListener("scroll", shrinkHeader);
    return () => {
      document.getElementById("boxm").removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="" />
          <Link to={"/"}>ZingMusic</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((e, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
