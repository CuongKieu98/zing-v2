import React from "react";
import Section from "../components/section/Section";
import SlideHome from "../components/slidehome/SlideHome";
import { SECTION_1,SECTION_2,SECTION_3,SECTION_4 } from "../assets/fake-data/db";

const Home = () => {
  return (
    <div className="container-main">
      <SlideHome />
      <Section title={"Có thể bạn muốn nghe"} list={SECTION_1}/>
      <Section title={"Nhạc mới mỗi ngày"} list={SECTION_2}/>
      <Section title={"Top 100"} list={SECTION_4 }/>
      <Section title={"XONE's CORNER"} list={SECTION_3}/>

    </div>
  );
};

export default Home;
