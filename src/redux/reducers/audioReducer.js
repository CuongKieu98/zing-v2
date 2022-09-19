import { ActionTypes } from "@mui/base";

const initialState = {
  isPlay: false,
  isMute: false,
  isPopup:false,
  songId: "ZZFDAZ89",
  infoSong: {
    title: "Waiting For You",
    thumbnailM:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/7/7/2/e772358978fef8a02eefd34f6a4ca6f3.jpg",
    thumbnail:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/e/7/7/2/e772358978fef8a02eefd34f6a4ca6f3.jpg",
    artistsNames: "MONO, Onionn",
  },
  srcAudio:
    "https://vnso-zn-23-tf-mp3-s1-m-zmp3.zmdcdn.me/ccf7c0f1fcb115ef4ca0/7510813714486513959?authen=exp=1663743434~acl=/ccf7c0f1fcb115ef4ca0/*~hmac=e6c0c17087f9dd98fff6ca5ee7d8ce92",
  currentTime: 0,
  duration: 266,
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
  lyric:"",
};
const initialState1 = {
  isPlay: false,
  isMute: false,
  songId: "",
  infoSong: {
    title: "",
    thumnailM: "",
    thumnail: "",
    artists: [],
  },
  srcAudio:
    "https://vnso-zn-10-tf-mp3-s1-m-zmp3.zmdcdn.me/ccf7c0f1fcb115ef4ca0/7510813714486513959?authen=exp=1663213044~acl=/ccf7c0f1fcb115ef4ca0/*~hmac=09d94935a37dcd4ba69b8ca82f3b81ca",
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
