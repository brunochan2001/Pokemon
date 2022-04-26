import { combineReducers } from "redux";
import searchReducers from "./searchReducers";

const reducer = combineReducers({ searchReducers });

export default reducer;
