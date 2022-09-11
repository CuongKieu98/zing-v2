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

function App() {
  return (
    <BrowserRouter>
      <div
        className="bg-layout"
        style={{ backgroundImage: `url(${images.background1})` }}
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
      </div>
    </BrowserRouter>
  );
}

export default App;
