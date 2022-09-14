import React from "react";
import Action from "../action/Action";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";

const Loop = () => {
  const handleLoop = () => {
    return;
  };
  return (
    <>
      <Action
        icon={{
          icon: <RepeatRoundedIcon sx={{ fontSize: 20 }} />,
          title: "Phát lại tất cả",
          onClick: (e) => handleLoop(e, "Phát lại"),
          className: "card-icon ",
        }}
        className={"mg-07"}
      />
    </>
  );
};

export default Loop;
