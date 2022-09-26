import React from "react";
import Action from "../action/Action";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import Button from "../button/Button";

const Loop = () => {
  const handleLoop = () => {
    return;
  };
  return (
    <>
      <Button
        className={"is-32 no-bg mg-07 hide-on-mobile"}
        onClick={(e) => handleLoop(e)}
        customIcon={"is-hover-circle"}
      >
        <RepeatRoundedIcon
          sx={{ fontSize: 22, color: "var(--setting-icon-text)" }}
        />
      </Button>
    </>
  );
};

export default Loop;
