// swiper bundle styles
import "swiper/css/bundle";
// swiper core styles
import "swiper/css";

import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Routesv6 from "./config/Routesv6";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import images from "./assets/images";
import SideBar from "./components/sidebar/SideBar";
import PlayingBar from "./components/playingbar/PlayingBar";
import { actionSelector } from "./redux/selectors/selectors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setColor, setMode } from "./redux/actions/actions";

function App() {
  const bg = useSelector(actionSelector).bgReducer;

  const theme = useSelector(actionSelector).ThemeReducer;
  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem("theme");

    const dataClass = localStorage.getItem("datatheme");
    console.log(dataClass);
    if (themeClass === null) {
      dispatch(setMode("theme-dynamic-zma"));
      dispatch(
        setColor({
          background:
            "/static/media/zma-bg.b3c1beb7f654c48c7ad4c258332a72ba.svg",
          class: "theme-dynamic-zma",
          datatheme: "blue",
          id: "zma",
          img: "/static/media/zma.2c293d93e1c69a0999ad.jpg",
          title: "Zing Music Awards",
        })
      );
    } else {
      dispatch(setColor(JSON.parse(dataClass)));

      dispatch(setMode(themeClass));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div
        data-theme={theme.color?.datatheme}
        className={`bg-layout ${theme.mode}`}
        style={{
          backgroundImage: `url(${theme.color?.background})`,
          backgroundSize: "1920px auto",
          backgroundRepeat: "reqeat",
        }}
      >
        <SideBar />
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <Header />
          <main
            id={"boxm"}
            className="main"
            style={{
              position: "absolute",
              inset: "0px",
              overflow: "hidden scroll",
              marginBottom: "0px",
            }}
          >
            <Routesv6 />
            <Footer />
          </main>
        </div>
        <PlayingBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
