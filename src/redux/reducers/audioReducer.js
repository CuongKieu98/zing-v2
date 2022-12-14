
import audios from "../../assets/fake-data/audio";
import { MY_PLAYLIST } from "../../assets/fake-data/db";
import info from "../../assets/fake-data/info";
import TYPE_PLAYLIST from "../../consts/TYPE_PLAYLIST";


const initialState = {
  isPlay: false,
  isMute: false,
  isPopup: false,
  isLoading:false,
  songId: "1",
  infoSong: {
    encodeId: "1",
    title: "Mình Hãy Ngừng Lại Em Nhé",
    thumbnailM: info.emnendunglai,
    thumbnail: info.emnendunglai,
    artistsNames: "Văn Võ,Ngọc Nhân",
    album: {
      encodeId: "6BZUUWW0",
      title: "Mình Ngừng Lại Em Nhé (Single)",
    },
    srcAudio: audios.minhngunglaiemnhe,
    currentTime: 0,
    duration: 339,
    lyric: info.minhngunglaiemnhelrc,
  },
  srcAudio: audios.minhngunglaiemnhe,
  currentTime: 0,
  duration: 339,
  volume: 0.5,
  isLoop: false,
  type:TYPE_PLAYLIST.MYPLAYLIST,
  playingList: MY_PLAYLIST,
  isLyric: false,
  lyric: info.minhngunglaiemnhelrc,
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
        infoSong: action.payload,
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
        lyric: action.payload,
      };
    case "ACTION_SET_POPUP":
      return {
        ...state,
        isPopup: action.payload,
      };
      case "ACTION_SET_TYPE":
        return {
          ...state,
          type: action.payload,
        };
        case "ACTION_SET_LOADINGAPI":
          return {
            ...state,
            isLoading: action.payload,
          };
    default:
      return state;
  }
};

export default audioReducer;
