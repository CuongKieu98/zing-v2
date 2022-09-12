import React, { useEffect, useState } from "react";
import "./charthome.scss";
import { getCharthome } from "../../../api/musicApi";
import { Link } from "react-router-dom";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import images from "../../../assets/images";
import Media from "../../media/Media";
const ChartHome = () => {
  const [chart, setChart] = useState([]);
  const dataSize = 4;
  useEffect(() => {
    getCharthome().then((res) => {
      setChart(res.data.RTChart.items?.slice(0, dataSize));
      console.log(res.data.RTChart.items?.slice(0, dataSize));
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
        <Link to={"/zing-chart"}>
          {" "}
          <PlayCircleIcon />
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
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChartHome;
