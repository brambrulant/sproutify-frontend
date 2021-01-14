import axios from "axios";
import queryString from "querystring";

export const fetchPlaylistSucces = (playlist) => ({
  type: "playlist/fetchPlaylistSucces",
  payload: playlist,
});

export const fetchPlaylist = () => {
  const query = queryString.parse(window.location.search);
  const token = query["?access_token"];
  console.log(token);

  console.log("FETCH MY PLAYLISTS FROM SPOTIFY?");

  return async (dispatch) => {
    axios(`https://api.spotify.com/v1/me/playlists`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((response) => {
      dispatch(fetchPlaylistSucces(response.data));
      console.log("from action fetchuserdata:", response.data);
    });
  };
};
