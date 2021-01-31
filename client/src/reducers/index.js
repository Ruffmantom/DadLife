// import all the reducers and serve them here with combineReducers
import { combineReducers } from "redux";
import isModalOpen from "./isModalOpen";

const allReducers = combineReducers({
  //name I want to call it : reducer name from import
  modalOpen: isModalOpen,
});
export default allReducers;
