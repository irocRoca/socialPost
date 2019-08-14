import { combineReducers } from "redux";
import userAuth from "./userAuth";

const rootReducer = combineReducers({
  userData: userAuth
});

export default rootReducer;
