import { ActionTypes } from "@mui/base";
import audios from "../../assets/fake-data/audio";
import info from "../../assets/fake-data/info";

const initialState = {
  isPlay: false,
  isMute: false,
  isPopup:false,
  songId: "1",
  infoSong: {
    title: "Mình Hãy Ngừng Lại Em Nhé",
    thumbnailM: info.emnendunglai,
    thumbnail: info.emnendunglai,
    artistsNames:'Văn Võ,Ngọc Nhân',
    album: {
      encodeId: "6BZUUWW0",
      title: "Mình Ngừng Lại Em Nhé (Single)",
    }
  },
  srcAudio:
  audios.minhngunglaiemnhe, 
  currentTime: 0,
  duration: 339,
  volume: 0.5,
  isLoop: false,
  playingList: [
    {
      encodeId: "Z60BAWEO",
      title: "Em Lấy Chồng",
      thumbnailM:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/1/5/e/515ee410d55fd71ae7c59e13f57ae47f.jpg",
      thumbnail:
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/5/1/5/e/515ee410d55fd71ae7c59e13f57ae47f.jpg",
      artistsNames: "Khắc Việt, ACV",
    },
    {
      encodeId: "Z60A60FU",
      title: "Cứu Vãn Kịp Không",
      thumbnailM:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/e/6/4/be64a8856566400dc3e2b959f252f363.jpg",
      thumbnail:
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/b/e/6/4/be64a8856566400dc3e2b959f252f363.jpg",
      artistsNames: "Vương Anh Tú",
    },
    {
      encodeId: "ZZFDAZ89",
      title: "Waiting For You",
      thumbnailM:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/e/6/4/be64a8856566400dc3e2b959f252f363.jpg",
      thumbnail:
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/b/e/6/4/be64a8856566400dc3e2b959f252f363.jpg",
      artistsNames: "MONO, Onionn",
    },
    {
      encodeId: "ZZDFBFD8",
      title: "Em Nên Dừng Lại",
      thumbnailM:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/e/6/4/be64a8856566400dc3e2b959f252f363.jpg",
      thumbnail:
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/b/e/6/4/be64a8856566400dc3e2b959f252f363.jpg",
      artistsNames: "Khang Việt",
    },
  ],
  isLyric: false,
  lyric:info.minhngunglaiemnhelrc,
};
const initialState1 = {
  isPlay: false,
  isMute: false,
  infoSong: {
    encodeId:"1",
    title: "Mình Hãy Ngừng Lại Em Nhé",
    thumbnailM: info.emnendunglai,
    thumbnail: info.emnendunglai,
    artistsNames:'Văn Võ,Ngọc Nhân',
    album: {
      encodeId: "6BZUUWW0",
      title: "Mình Ngừng Lại Em Nhé (Single)",
    },
    srcAudio:audios.minhngunglaiemnhe,
    currentTime: 0,
    duration: 339, 
    lyric:info.minhngunglaiemnhelrc,
  },
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
        playingList: [...state.playingList, action.payload],
      };
    case "ACTION_SET_LYRIC":
      return {
        ...state,
        lyric: [action.payload],
      };
      case "ACTION_SET_POPUP":
        return {
          ...state,
          isPopup: action.payload,
        };
    // case "ACTION_SET_SONG":
    //   return {
    //     ...state,
    //     state: action.payload,
    //   };
    default:
      return state;
  }
};

export default audioReducer;
