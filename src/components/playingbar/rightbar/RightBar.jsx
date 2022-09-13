import React from "react";
import Action from "../../action/Action";
import "./rightbar.scss";

//icon
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Media from "../../media/Media";

const icons = [
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

const RightBar = (props) => {
  const { bg ,tracks} = props;

  return (
    <div className="right-bar" style={{ backgroundColor: `${bg.bgRightbar}` }}>
      <div className="right-bar__container-bar">
        <div className="right-bar__header">
          <div className="level tabs-bar">
            <div className="level-left">
              <div className="level__item is-active">
                <h6>Danh sách phát</h6>
              </div>
              <div className="level__item">
                <h6>Nghe gần đây</h6>
              </div>
            </div>
            <div className="level-right">
              <div className="level">
                {icons.map((item, index) => (
                  <div className="level__item" key={index}>
                    <Action icon={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Content tracks={tracks} bg={bg}/>
      </div>
    </div>
  );
};

const Content = ({tracks,bg}) =>{
    console.log(tracks);
    return (
        <div className="right-bar__content">
            <div className="right-bar__content__main" tabIndex={0}>
                <div className="right-bar__content__main__section">
                    <div className="right-bar__content__list">
                        <div className="right-bar__content__items">
                            <div className="media-item is-active" style={{ backgroundColor: `${bg.activeMedia}` }}>
                                <Media item={{
                                  encodeId:tracks.songId,
                                  title: tracks.infoSong.title,
                                  thumbnailM: tracks.infoSong.thumbnailM,
                                  thumbnail: tracks.infoSong.thumbnailM,
                                  artistsNames: tracks.infoSong.artistsNames,
                                }} tracks={tracks} className={"is-40"}/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightBar;
