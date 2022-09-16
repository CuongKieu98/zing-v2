import React, { useEffect, useState, useRef } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper";
import banners from "../../assets/banner";
import "swiper/css/navigation";


import "./slidehome.scss";
const bannersSlide = [
  {
    banner: banners.banner1,
    encodeId: "Z60EWI76",
  },
  {
    banner: banners.banner2,
    encodeId: "ZWZCOE6B",
  },
  {
    banner: banners.banner3,
    encodeId: "Z60CCZEA",
  },
  {
    banner: banners.banner4,
    encodeId: "Z60D79IC",
  },
  {
    banner: banners.banner5,
    encodeId: "ZE6CF7C9",
  },
  {
    banner: banners.banner6,
    encodeId: "IWZ97BF8",
  },
];

const SlideHome = () => {
  return (
    <div className="slide-home">
      <Swiper
        modules={[Autoplay,Navigation]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true} 
        loop={true}
        breakpoints={{
          600: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        
      >
        {bannersSlide.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <SlideItem item={item} className={isActive ? "active" : ""} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const SlideItem = (props) => {
  let navigate = useNavigate();
  const item = props.item;
  const image = item.banner;
  return (
    <div className="slide-item__content_banner">
      <img src={image} alt="" />
    </div>
  );
};
export default SlideHome;
