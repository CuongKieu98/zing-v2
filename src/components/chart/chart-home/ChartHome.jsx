import React, { useEffect, useState } from "react";
import "./charthome.scss";
import {
  getCharthome,

} from "../../../api/musicApi";
import { Link } from "react-router-dom";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import images from "../../../assets/images";
import Media from "../../media/Media";
import { useDispatch, useSelector } from "react-redux";
import { actionSelector } from "../../../redux/selectors/selectors";


const ChartHome = () => {
  const dispatch = useDispatch();

  const tracks = useSelector(actionSelector).audioReducer;
  const [chart, setChart] = useState([]);

  const dataSize = 4;


  useEffect(() => {
    getCharthome().then((res) => {
      setChart(res.data.RTChart.items?.slice(0, dataSize));
    });
  }, []);

  return (
    <div className="chart-home mt-3">
      <div
        className="bg-blur"
        style={{ backgroundImage: `url(${images.bgchart1})` }}
      ></div>
      <div className="bg-alpha"></div>
      <div className="chart-home__header">
        <Link to={"/zing-chart"}>#zingchart</Link>
        <Link to={"/zing-chart"} style={{ paddingTop: 10 }}>
          {" "}
          <PlayCircleIcon sx={{ fontSize: 36 }} />
        </Link>
      </div>
      <div className="chart-home__content">
        <div className="list">
          {chart.map((item, index) => (
            <div className="chart-home__content__item" key={index}>
              <div className="list-item">
                <Media
                  left={{
                    rank: index + 1,
                  }}
                  item={item}
                  tracks={tracks}
                />
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="is-center">
        <Link to={"/zing-chart"} className="show-more">
          {chart.length === 0 ? "Đang tải..." : "Xem thêm"}
        </Link>
      </div>
    </div>
  );
};

export default ChartHome;
