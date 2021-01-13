import { combineReducers } from "redux";
import playlist from "../store/playlist/reducer";
import user from "../store/user/reducer";

export default combineReducers({
  playlist,
  user,
});
