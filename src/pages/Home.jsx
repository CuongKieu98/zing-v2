import React from "react";
import Section from "../components/section/Section";
import SlideHome from "../components/slidehome/SlideHome";
import {
  RANK,
  SECTION_1,
  SECTION_2,
  SECTION_3,
  SECTION_4,
} from "../assets/fake-data/db";
import ChartHome from "../components/chart/chart-home/ChartHome";
import RadioSection from "../components/section/radio-section/RadioSection";
import Card from "../components/card/Card";
import images from "../assets/images";


const Home = () => {
  return (
    <div className="container-main">
      <SlideHome />
      <Section title={"Có thể bạn muốn nghe"} list={SECTION_1} />
      <Section title={"Nhạc mới mỗi ngày"} list={SECTION_2} />
      <Section title={"Top 100"} list={SECTION_4} />
      <div className="week-card mt-3" >
        <div className="week-card__item">
          <Card img={images.rankvn} />
          <Card img={images.rankusuk} />
          <Card img={images.rankkpop} />
        </div>
      </div>
      <Section title={"XONE's CORNER"} list={SECTION_3} />
      <RadioSection title={"Radio Nổi Bật"} />
    </div>
  );
};

export default Home;
