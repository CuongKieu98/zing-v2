
import images from "../../assets/images"


export const initialState = {
    bg: images.background1,
    bgSidebar:"hsla(0,0%,100%,0.05)",
    bgSidebarIsActive:"hsla(0,0%,100%,0.1)",
    bgSidebarBorderActive:"3px solid #ed2b91",
    bgLoading:"hsla(0, 0%, 100%, 0.1)",
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