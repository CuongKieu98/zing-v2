import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCharthome } from "../api/musicApi";
import Media from "../components/media/Media";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MicNoneIcon from "@mui/icons-material/MicNone";
import { actionSelector } from "../redux/selectors/selectors";
import "../scss/_chart.scss";
import Button from "../components/button/Button";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import Playlist from "../components/playlist/Playlist";
import TYPE_PLAYLIST from "../consts/TYPE_PLAYLIST";
import CARD_TYPE from "../consts/CARD_TYPE";

const iconsMedia = [
  {
    icon: <MicNoneIcon sx={{ fontSize: 20 }} />,
    title: "Phát cùng lời bài hát",

    className: "card-small-icon ",
  },
  {
    icon: <FavoriteBorderIcon sx={{ fontSize: 20 }} />,
    title: "Thêm vào thư viện",

    className: "card-small-icon ",
  },
  {
    icon: <MoreHorizIcon sx={{ fontSize: 20 }} />,
    title: "Xem thêm",
    className: "card-small-icon ",
  },
];

const Chart = () => {
  const dispatch = useDispatch();
  const reducer = useSelector(actionSelector);
  const bg = reducer.bgReducer;
  const tracks = reducer.audioReducer;
  const [data, setData] = useState({});
  const [itemChart, setItemChart] = useState([]);
  const [datasize, setDatasize] = useState(10);

  // const itemChart = data ? data.RTChart.items : []

  useEffect(() => {
    getCharthome()
      .then((res) => {
        setData(res.data);
        setItemChart(res.data.RTChart.items);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleLoadMore = () => {
    if (itemChart.length === 0) return;
    setDatasize(100);
  };

  return (
    <div className="container-main">
      <div className="chart-header">
        <div className="chart-title">
          <h3 className="title">#zingchart</h3>
          <Button
            className={"is-40 mg-07"}
            customIcon={"is-hover-circle"}
            style={{ backgroundColor: "var(--purple-primary)" }}
          >
            <PlayArrowRoundedIcon
              sx={{ fontSize: 30, color: "var(--setting-icon-text)" }}
            />
          </Button>
        </div>
      </div>

      <Playlist
        type={TYPE_PLAYLIST.ZINGCHART}
        playlist={itemChart.slice(0, datasize)}
        prefixType={CARD_TYPE.rank}
      />
      {datasize < 100 && (
        <div className="is-center">
          <button onClick={handleLoadMore} className="btn-morechart">
            Xem Top 100
          </button>
        </div>
      )}
    </div>
  );
};

export default Chart;
