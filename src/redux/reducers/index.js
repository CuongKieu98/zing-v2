import {combineReducers} from "redux";
import bgReducer from "./bgReducer";
import audioReducer from "./audioReducer";
import ThemeReducer from "./themeReducer";
    
const reducers = combineReducers({
    bgReducer,
    audioReducer,
    ThemeReducer,
});

export default reducers;