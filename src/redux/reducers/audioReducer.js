import { ActionTypes } from "@mui/base";

const initialState = {
  isPlay: false,
  isMute: false,
  songId: "",
  infoSong: {
    title: "",
    thumnailM: "",
    thumnail: "",
    artists: [],
  },
  srcAudio: "",
  currentTime: 0,
  duration: 0,
  volume: 0.5,
  isLoop: false,
  playingList: [],
  isLyric: false,
};
const audioReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTION_PLAY":
      return {
        ...state,
        isPlay: action.payload,
      };
    case "ACTION_MUTE":
      return {
        ...state,
        isMute: action.payload,
      };
    case "ACTION_SET_SONGID":
      return {
        ...state,
        songId: action.payload,
      };
    case "ACTION_SET_INFOSONG":
      return {
        ...state,
        infoSong: {
          ...state.infoSong,
          infoSong: action.payload,
        },
      };
    case "ACTION_SET_SRC_AUDIO":
      return {
        ...state,
        srcAudio: action.payload,
      };
    case "ACTION_SET_CUR_TIME":
      return {
        ...state,
        currentTime: action.payload,
      };

    case "ACTION_SET_DUR_TIME":
      return {
        ...state,
        duration: action.payload,
      };
    case "ACTION_SET_VOL":
      return {
        ...state,
        volume: action.payload,
      };
    case "ACTION_SET_LOOP":
      return {
        ...state,
        isLoop: action.payload,
      };
    case "ACTION_SET_PLAYLIST":
      return {
        ...state,
        playingList: action.payload,
      };
    case "ACTION_SET_LYRIC":
      return {
        ...state,
        isLyric: action.payload,
      };
    default:
      return state;
  }
};

export default audioReducer;
