import React from "react";
import Action from "../action/Action";

import ShuffleRoundedIcon from "@mui/icons-material/ShuffleRounded";

const ActiveRandom = () => {
  const handleActive = () => {
    return;
  };
  return (
    <>
      <Action
        icon={{
          icon: <ShuffleRoundedIcon sx={{ fontSize: 20 }} />,
          title: "Bật phát ngẫu nhiên",
          onClick: (e) => handleActive(e, "favorite"),
          className: "card-icon ",
        }}
        className={"mg-07"}
      />
    </>
  );
};

export default ActiveRandom;
