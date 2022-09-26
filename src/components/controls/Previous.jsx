import React from "react";
import Action from "../action/Action";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import Button from "../button/Button";
const Previous = () => {
  const handlePrev = () => {
    return;
  };
  return (
    <>
      <Button
        className={"is-32 no-bg mg-07 hide-on-mobile"}
        onClick={(e) => handlePrev(e)}
        customIcon={"is-hover-circle"}
      >
        <SkipPreviousRoundedIcon
          sx={{ fontSize: 25, color: "var(--setting-icon-text)" }}
        />
      </Button>
    </>
  );
};

export default Previous;
