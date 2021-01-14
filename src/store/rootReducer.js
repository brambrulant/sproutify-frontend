import { combineReducers } from "redux";
import playlist from "../store/playlist/reducer";
import user from "../store/user/reducer";
import tracks from "../store/playlistTracks/reducer";
import trackData from "../store/trackData/reducer";

export default combineReducers({
  playlist,
  user,
  tracks,
  trackData,
});
