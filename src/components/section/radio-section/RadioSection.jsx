import React from "react";
import banners from "../../../assets/banner";

import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useNavigate } from "react-router-dom";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import radios from "../../../assets/radios";
import "./radiosection.scss";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import Action from "../../action/Action";
import images from "../../../assets/images";
import borderSLide from "../../../assets/images/border.svg";

const bannersSlide = [
  {
    banner: radios.radio1,
    title: "XONE Radio",
    listening: "449 đang nghe",
    dash: "230",
  },
  {
    banner: radios.radio2,
    title: "V-POP",
    dash: "80",
    listening: "1k đang nghe",
  },

  {
    banner: radios.radio3,
    title: "Chạm",
    dash: "45",
    listening: "344 đang nghe",
  },

  {
    banner: radios.radio4,
    title: "VN Radio",
    dash: "25",
    listening: "49 đang nghe",
  },

  {
    banner: radios.radio5,
    title: "Bolero",
    dash: "65",
    listening: "439 đang nghe",
  },

  {
    banner: radios.radio6,
    title: "US-UK",
    dash: "56",
    listening: "269 đang nghe",
  },

  {
    banner: radios.radio7,
    title: "K-POP",
    listening: "449 đang nghe",
    dash: "66",
  },

  {
    banner: radios.radio8,
    title: "The One Radio",
    dash: "50",
    listening: "49 đang nghe",
  },

  {
    banner: radios.radio9,
    title: "Acoustic",
    dash: "16",
    listening: "79 đang nghe",
  },

  {
    banner: radios.radio10,
    title: "Rap Việt",
    dash: "88",
    listening: "57 đang nghe",
  },
];
const BorderIcon = (props) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    className={props.className}
  >
    <circle
      className="svg-circle-bg"
      stroke="rgba(255, 255, 255, 0.2)"
      cx="50"
      cy="50"
      r="48.75"
      strokeWidth="2.5"
      fill="none"
    ></circle>
    <circle
      className="svg-circle"
      stroke="#ff4b4a"
      cx="50"
      cy="50"
      r="48.75"
      strokeWidth="2.5"
      strokeDasharray="306.3052837250048"
      strokeDashoffset={props.dash}
      style={{ transition: " stroke-dashoffset 850ms ease-in-out 0s" }}
      fill="none"
    ></circle>
  </svg>
);

const RadioSection = (props) => {
  return (
    <div className="slide-radio mt-3">
      {props.title && <h3 className="title is-2">{props.title}</h3>}
      <Swiper
        modules={[Navigation]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={3}
        navigation={true}
        slidesPerGroup={3}
        breakpoints={{
          600: {
            slidesPerView: 5,
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
  );
};
const RadioItem = (props) => {
  let navigate = useNavigate();
  const item = props.item;
  return (
    <div className="card-radio">
      <div className="card-radio__img">
        <BorderIcon dash={item.dash} className="svg-icon" />
        <figure>
          <img className="banner" src={item.banner} alt="" />
        </figure>
        <div className="opacity"></div>
        <img className="host" src={item.banner} alt="" />

        <div className="card-radio__action">
          <Action
            icon={{
              icon: <PlayArrowRoundedIcon sx={{ fontSize: 45 }} />,
              className: "border-icon ",
              customClass: " no-bg-hover",
            }}
          />
        </div>
        <img className="live" src={images.liveimg} alt="" />
      </div>
      <div className="card-radio__content">
        <h3>
          <Link to={"/"}>
            <span>{item.title}</span>
          </Link>
        </h3>
        <h4>
          <span>{item.listening}</span>
        </h4>
      </div>
    </div>
  );
};
export default RadioSection;
