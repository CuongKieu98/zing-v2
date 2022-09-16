import React, { useEffect, useState } from "react";
import Action from "../../action/Action";
import Media from "../../media/Media";
import "./rightbar.scss";

//icon
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AlarmIcon from "@mui/icons-material/Alarm";
//drag drop item
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { TrackChangesSharp } from "@mui/icons-material";

const icons = [
  {
    icon: <AlarmIcon sx={{ fontSize: 20 }} />,
    title: "Hẹn giờ dừng phát nhạc",
    className: "card-small-icon ",
  },
  {
    icon: <MoreHorizIcon sx={{ fontSize: 20 }} />,
    title: "Khác",
    className: "card-small-icon ",
  },
];
const iconsMedia = [
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

const DragItem = styled.div`
  border-radius: 4px;
  background-color: ${(props) => props.bgActive};
  &:hover {
    background-color: ${(props) => props.hoverActive ? props.bgActive : props.hover};
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3), 0 1px 6px rgba(0, 0, 0, 0.3),
      inset 0 1px 1px rgba(25, 255, 255, 0.05);
    .opacity {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 4px;
      background-color: ${(props) => props.opacity};
    }
    .center {
      visibility: visible;
    }
  }
  .center {
    visibility: ${(props) => (props.hoverActive ? "visible" : "hidden")};
  }
`;

const RightBar = (props) => {
  const { bg, tracks, refbar } = props;


  return (
    <div
      className="right-bar"
      style={{ backgroundColor: `${bg.bgRightbar}` }}
      ref={refbar}
    >
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
                  <div
                    className="level__item"
                    style={{ padding: "5px 5px" }}
                    key={index}
                  >
                    <Action icon={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Content tracks={tracks} bg={bg} />
      </div>
    </div>
  );
};

const Content = ({ tracks, bg }) => {
  const [data, setData] = useState(tracks.playingList || []);

  useEffect(() =>{
    setData(tracks.playingList);
    console.log(tracks.playingList);
  },[tracks.playingList])

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    const [remove] = data.splice(source.index, 1);
    const newData = data.splice(destination.index, 0, remove);
  };

  return (
    <div className="right-bar__content">
      <div className="right-bar__content__main" tabIndex={0}>
        <div className="right-bar__content__main__section">
          <div className="right-bar__content__list">
            <div className="right-bar__content__items">

              <div className="next-song">
                <h3>Danh sách đang phát</h3>
              </div>
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="1">
                  {(provided) => (
                    <div {...provided.draggableProps} ref={provided.innerRef}>
                      {data.map((item, index) => (
                        <Draggable
                          key={item.encodeId}
                          draggableId={item.encodeId}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <>
                              <DragItem
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                isDragging={
                                  snapshot.isDragging &&
                                  !snapshot.isDropAnimating
                                }
                                hover={`${bg.alphaBg}`}
                                opacity={`${bg.darkAlpha}`}
                                bgActive={
                                  item.encodeId === tracks.songId
                                    ? `${bg.activeMedia}`
                                    : ""
                                }
                                hoverActive={item.encodeId === tracks.songId}
                              >
                                <Media
                                  item={item}
                                  tracks={tracks}
                                  className={"is-40"}
                                  right={iconsMedia}
                                />
                              </DragItem>
                              {item.encodeId === tracks.songId && (
                                <div className="next-song">
                                  <h3>Tiếp theo</h3>
                                </div>
                              )}
                            </>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
