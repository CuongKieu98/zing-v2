import React from "react";
import Action from "../action/Action";

import ShuffleRoundedIcon from "@mui/icons-material/ShuffleRounded";
import Button from "../button/Button";

const ActiveRandom = () => {
  const handleActive = () => {
    return;
  };
  return (
    <>
      <Button
        className={"is-32 no-bg mg-07 hide-on-mobile"}
        onClick={(e) => handleActive(e)}
        customIcon={"is-hover-circle"}
      >
        <ShuffleRoundedIcon
          sx={{ fontSize: 22, color: "var(--setting-icon-text)" }}
        />
      </Button>
    </>
  );
};

export default ActiveRandom;
