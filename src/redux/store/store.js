import { createStore } from "redux";
import bgReducer from "../reducers/bgReducer";

const store = createStore(bgReducer);

export default store;
