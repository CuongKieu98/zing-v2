import { useDispatch } from "react-redux";
import TYPE_PLAYLIST from "../consts/TYPE_PLAYLIST";
import React, { useCallback } from 'react'


export const nextSong = (type,data,list) => {

  if (type === TYPE_PLAYLIST.MYPLAYLIST) {
    nextSongLocal(data,list);
  } else if (type === TYPE_PLAYLIST.ZINGCHART) {
    nextSongWithApi(data,list);
  }
};

const nextSongLocal = async (data,list) => {

};

const nextSongWithApi = async (data) => {};

const findIndexSong = (list) => {
    const songIdx = list.playingList.findIndex(
      (e) => e.encodeId === list.songId
    );
    if (songIdx !== undefined && songIdx + 1 < list.playingList.length) {
      return songIdx + 1;
    } else {
      return 0;
    }
  };