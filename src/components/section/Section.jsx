import React from "react";
import "./section.scss";
import images from "../../assets/images";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeBgSelector } from "../../redux/selectors/selectors";
import Actions from "../actions/Actions";

//icon
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
//icon

const playlist = [
  {
    img: images.test1,
    title: "K-pop Deabak",
    astist: "aespa,NCT Dream,NewJeans...",
  },
  {
    img: images.test2,
    title: "K-pop Deabak",
    astist: "aespa,NCT Dream,NewJeans...",
  },
  {
    img: images.test3,
    title: "K-pop Deabak",
    astist: "aespa,NCT Dream,NewJeans...",
  },
  {
    img: images.test4,
    title: "K-pop Deabak",
    astist: "aespa,NCT Dream,NewJeans...",
  },
  {
    img: images.test5,
    title: "K-pop Deabak",
    astist: "aespa,NCT Dream,NewJeans...",
  },
];

const Section = (props) => {
  const {title} = props
  return (
    <div className="section mt-3">
      <div className="section__container mt-3">
        <h3 className="section__container__title is-2">{title}</h3>
        <div className="section__items">
          <div className="section__items__item">
            {playlist.map((item, index) => (
              <Card
                key={index}
                img={item.img}
                title={item.title}
                content={item.astist}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = (props) => {
  const { img, title, content } = props;

  const bg = useSelector(changeBgSelector);
  const handleClick = (e, value) => {
    e.preventDefault();
    console.log(value);
  };
  const icons = [
    {
      icon: <FavoriteBorderIcon sx={{ fontSize: 20 }} />,
      title: "Thêm vào thư viện",
      onClick: (e) => handleClick(e, "favorite"),
      className: "card-small-icon ",
    },
    {
      icon: <PlayArrowIcon sx={{ fontSize: 45 }} />,
      title: "Play",
      onClick: (e) => handleClick(e, "play"),
      className: "border-icon ",
      customClass:" no-bg"
    },
    {
      icon: <MoreHorizIcon sx={{ fontSize: 20 }} />,
      title: "Xem thêm",
      onClick: (e) => handleClick(e, "xem thêm"),
      className: "card-small-icon ",
    },
  ];

  return (
    <div className="card">
      <div className="card__img">
        <figure style={{ backgroundColor: `${bg.bgLoading}` }}>
          <img src={img} alt="" />
        </figure>
        <div className="opacity"></div>
        <div className="card__action">
          <Actions icons={icons} />
        </div>
      </div>
      <div className="card__content">
        <h3>
          <Link to={"/"}>
            <span>{title}</span>
          </Link>
        </h3>
        <h4>
          <span>{content}</span>
        </h4>
      </div>
    </div>
  );
};

export default Section;
