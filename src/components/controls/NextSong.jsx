import React from "react";
import Action from "../action/Action";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
const NextSong = () => {
  const handleNext = () => {
    return;
  };
  return (
    <>
      <Action
        icon={{
          icon: <SkipNextRoundedIcon sx={{ fontSize: 20 }} />,
          onClick: (e) => handleNext(e, "Khác"),
          className: "card-icon ",
        }}
        className={"mg-07"}
      />
    </>
  );
};

export default NextSong;
