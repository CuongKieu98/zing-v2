export const changeBg =(bg) =>{
    return {
        type:"CHANGE_BG",
        payload: bg
    }
}
export const togglePlay = (isPlay) =>{
    return {
        type:"ACTION_PLAY",
        payload:isPlay
    }
}
export const setSongId = (id) =>{
    return {
        type:"ACTION_SET_SONGID",
        payload:id
    }
}
export const setSongInfo = (info) =>{
    return {
        type:"ACTION_SET_INFOSONG",
        payload:info
    }
}
export const setSrcAudio = (src) =>{
    return {
        type:"ACTION_SET_SRC_AUDIO",
        payload:src
    }
}
export const setDurTime = (sec) =>{
    return {
        type:"ACTION_SET_DUR_TIME",
        payload:sec
    }
}