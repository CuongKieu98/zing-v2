import React from "react";

import { Route, Routes } from "react-router-dom";
import App from "../App";
import Catalog from "../pages/Catalog";
import Chart from "../pages/Chart";
import Detail from "../pages/Detail";

import Home from "../pages/Home";
import Radio from "../pages/Radio";
import TopMusic from "../pages/TopMusic";

const Routesv6 = () => {
  return (
    <Routes>
      <Route path="/:category/search/:keyword" element={<Catalog />} />
      <Route path="/:category/:id" element={<Detail />} />
      <Route path="/:category" element={<Catalog />} />
      <Route path="/" element={<Home />} />
      <Route path="/zing-chart" element={<Chart />} />
      <Route path="/top-100" element={<TopMusic />} />
      <Route path="/radio" element={<Radio />} />
    </Routes>
  );
};

export default Routesv6;
