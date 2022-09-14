import React from 'react'
import banners from '../../../assets/banner';

import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import radios from '../../../assets/radios';
import "./radiosection.scss"

const bannersSlide = [
    {
      banner: radios.radio1,
      title:"XONE Radio",
      listening:"449 đang nghe"
    },
    {
        banner: radios.radio2,
        title:"XONE Radio",
        listening:"449 đang nghe"
      },

      {
        banner: radios.radio3,
        title:"XONE Radio",
        listening:"449 đang nghe"
      },

      {
        banner: radios.radio4,
        title:"XONE Radio",
        listening:"449 đang nghe"
      },

      {
        banner: radios.radio5,
        title:"XONE Radio",
        listening:"449 đang nghe"
      },

      {
        banner: radios.radio6,
        title:"XONE Radio",
        listening:"449 đang nghe"
      },

      {
        banner: radios.radio7,
        title:"XONE Radio",
        listening:"449 đang nghe"
      },

      {
        banner: radios.radio8,
        title:"XONE Radio",
        listening:"449 đang nghe"
      },

      {
        banner: radios.radio9,
        title:"XONE Radio",
        listening:"449 đang nghe"
      },

      {
        banner: radios.radio10,
        title:"XONE Radio",
        listening:"449 đang nghe"
      },
  

  ];

const RadioSection = () => {
  return (
    <div className="slide-radio">
    <Swiper
      modules={[Navigation]}
      grabCursor={true}
      spaceBetween={0}
      slidesPerView={3}
      navigation={true} 
      breakpoints={{
        600: {
          slidesPerView: 4,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 7,
          spaceBetween: 5,
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
            <RadioItem item={item} className={isActive ? "active" : ""} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}
const RadioItem = (props) => {
    let navigate = useNavigate();
    const item = props.item;
    const image = item.banner;
    return (
      <div className="slide-radio__content_banner">
        <img src={image} alt="" />
      </div>
    );
  };
export default RadioSection