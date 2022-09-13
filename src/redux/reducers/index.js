import {combineReducers} from "redux";
import bgReducer from "./bgReducer";
import audioReducer from "./audioReducer";
    
const reducers = combineReducers({
    bgReducer,
    audioReducer,
});

export default reducers;