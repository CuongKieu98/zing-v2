import React, { useState } from "react";

import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import RepeatOneRoundedIcon from "@mui/icons-material/RepeatOneRounded";
import { setIsLoop } from "../../redux/actions/actions";
const Loop = () => {
  const dispatch = useDispatch();
  const [loop, setLoop] = useState(false);

  const handleLoop = () => {
    dispatch(setIsLoop(!loop));
    setLoop(!loop);
  };
  return (
    <>
      <Button
        className={"is-32 no-bg mg-07 hide-on-mobile"}
        onClick={(e) => handleLoop(e)}
        customIcon={"is-hover-circle"}
      >
        {loop ? (
          <RepeatOneRoundedIcon
            sx={{ fontSize: 22, color: "var(--link-text-hover)" }}
          />
        ) : (
          <RepeatRoundedIcon
            sx={{ fontSize: 22, color: "var(--setting-icon-text)" }}
          />
        )}
      </Button>
    </>
  );
};

export default Loop;
