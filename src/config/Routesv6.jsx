import React from "react";

import { Route, Routes } from "react-router-dom";

import Chart from "../pages/Chart";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Radio from "../pages/Radio";
import TopMusic from "../pages/TopMusic";

const Routesv6 = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/zing-chart" element={<Chart />} />
      <Route path="/top-100" element={<TopMusic />} />
      <Route path="/radio" element={<Radio />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default Routesv6;
