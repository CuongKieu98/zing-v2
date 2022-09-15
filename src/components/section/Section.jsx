import React from "react";
import "./section.scss";
import images from "../../assets/images";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionSelector } from "../../redux/selectors/selectors";
import Actions from "../actions/Actions";

//icon
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
//icon

const Section = (props) => {
  const { title, list } = props;
  return (
    <div className="section mt-3">
      <div className="section__container mt-3">
        <h3 className="section__container__title is-2">{title}</h3>
        <div className="section__items">
          <div className="section__items__item">
            {list.map((item, index) => (
              <CardMedia
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

const CardMedia = (props) => {
  const { img, title, content } = props;

  const bg = useSelector(actionSelector).bgReducer;
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
      icon: <PlayArrowRoundedIcon sx={{ fontSize: 45 }} />,
      onClick: (e) => handleClick(e, "play"),
      className: "border-icon ",
      customClass: " no-bg",
    },
    {
      icon: <MoreHorizIcon sx={{ fontSize: 20 }} />,
      title: "Xem thêm",
      onClick: (e) => handleClick(e, "Khác"),
      className: "card-small-icon ",
    },
  ];

  return (
    <div className="card-media">
      <div className="card-media__img">
        <figure style={{ backgroundColor: `${bg.bgLoading}` }}>
          <img src={img} alt="" />
        </figure>
        <div className="opacity"></div>
        <div className="card-media__action">
          <Actions icons={icons} />
        </div>
      </div>
      <div className="card-media__content">
        <h3>
          <Link to={"/"}>
            <span>{title}</span>
          </Link>
        </h3>
        {content && (
          <h4>
            <span>{content}</span>
          </h4>
        )}
      </div>
    </div>
  );
};

export default Section;
