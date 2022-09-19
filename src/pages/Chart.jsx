import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCharthome } from "../api/musicApi";
import Media from "../components/media/Media";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MicNoneIcon from '@mui/icons-material/MicNone';
import { actionSelector } from "../redux/selectors/selectors";
import "../scss/_chart.scss";

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

  const handleLoadMore = () =>{
    if(itemChart.length === 0) return;
    setDatasize(100)
  }
 
  return (
    <div className="container-main">
      <div className="list mb-3">
        {itemChart.slice(0, datasize).map((item, index) => (
          <div className="chart-song-items" key={index}>
            <div className="list-item-border">
              <Media
                left={{
                  rank: index + 1,
                }}
                item={item}
                tracks={tracks}
                className={"is-40"}
                sort={true}
                right={iconsMedia}
                time={true}
              />
            </div>
          </div>
        ))}
      <div className="is-center">
        <div className="show-more" onClick={handleLoadMore}>
          {itemChart.length === 0 ? "Đang tải..." : "Xem thêm"}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Chart;
