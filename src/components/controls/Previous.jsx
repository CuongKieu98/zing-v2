import React from "react";
import Action from "../action/Action";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
const Previous = () => {
  const handlePrev = () => {
    return;
  };
  return (
    <>
      <Action
        icon={{
          icon: <SkipPreviousRoundedIcon sx={{ fontSize: 20 }} />,
          onClick: (e) => handlePrev(e, "favorite"),
          className: "card-icon ",
        }}
        className={"mg-07"}
      />
    </>
  );
};

export default Previous;
