export const changeBg = (bg) => {
  return {
    type: "CHANGE_BG",
    payload: bg,
  };
};
export const setMode = mode => {
  return {
      type: 'SET_MODE',
      payload: mode
  }
}
export const setColor = color => {
  return {
      type: 'SET_COLOR',
      payload: color
  }
}


export const togglePlay = (isPlay) => {
  return {
    type: "ACTION_PLAY",
    payload: isPlay,
  };
};
export const setSongId = (id) => {
  return {
    type: "ACTION_SET_SONGID",
    payload: id,
  };
};
export const setSongInfo = (info) => {
  return {
    type: "ACTION_SET_INFOSONG",
    payload: info,
  };
};
export const setSrcAudio = (src) => {
  return {
    type: "ACTION_SET_SRC_AUDIO",
    payload: src,
  };
};
export const setDurTime = (sec) => {
  return {
    type: "ACTION_SET_DUR_TIME",
    payload: sec,
  };
};
export const setPlayList = (song) => {
  return {
    type: "ACTION_SET_PLAYLIST",
    payload: song,
  };
};
export const setPopup = (val) => {
  return {
    type: "ACTION_SET_POPUP",
    payload: val,
  };
};
export const setLyric = (val) => {
  return {
    type: "ACTION_SET_LYRIC",
    payload: val,
  };
};
export const setCurTime = (time) => {
  return {
    type: "ACTION_SET_CUR_TIME",
    payload: time,
  };
};
export const setType = (type) => {
  return {
    type: "ACTION_SET_TYPE",
    payload: type,
  };
};
export const setLoading= (value) => {
  return {
    type: "ACTION_SET_LOADINGAPI",
    payload: value,
  };
};
export const setIsLoop= (loop) => {
  return {
    type: "ACTION_SET_LOOP",
    payload: loop,
  };
};