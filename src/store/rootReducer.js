import { combineReducers } from "redux";
import playlist from "../store/playlist/reducer";
import userTracks from "../store/user/reducer";
import tracks from "../store/playlistTracks/reducer";
import trackData from "../store/trackData/reducer";

export default combineReducers({
  playlist,
  userTracks,
  tracks,
  trackData,
});
