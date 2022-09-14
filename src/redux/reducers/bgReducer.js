
import images from "../../assets/images"

export const initialState = {
    bg: images.background1,
    bgSidebar:"hsla(0,0%,100%,0.05)",
    bgSidebarIsActive:"hsla(0,0%,100%,0.1)",
    bgSidebarBorderActive:"3px solid #ed2b91",
    bgLoading:"hsla(0, 0%, 100%, 0.1)",
    bglayout:"#37075d",
    darkAlpha:"rgba(0, 0, 0, 0.5)",
    alphaBg:"hsla(0,0%,100%,0.1)",
    //now playing bar
    themePlaying:images.zma,
    playerbg:"rgba(0,0,0,0.2)",
    borderPlayer: "1px solid hsla(0,0%,100%,0.1)",
    //rightbar
    bgRightbar:"#5d218c",
    activeMedia:"#ed2b91"
};
const bgReducer = (state=initialState,action) => {
    switch (action.type){
        case "CHANGE_BG":
            return {
                ...state,
                bg: action.payload
            }
        default:
            return state;
    }
};

export default bgReducer;