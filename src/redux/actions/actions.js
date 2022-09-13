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