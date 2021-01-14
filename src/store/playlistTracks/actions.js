import axios from "axios";
import queryString from "querystring";

export const fetchCurrentPlaylistTracksSucces = (props) => ({
  type: "tracks/fetchCurrentPlaylistSucces",
  payload: props,
});

export const fetchCurrentPlaylistTracks = (id) => {
  const query = queryString.parse(window.location.search);
  const token = query["?access_token"];
  console.log(token);

  console.log("FETCH TRACKS FROM SPOTIFY?");

  return async (dispatch) => {
    axios(`https://api.spotify.com/v1/playlists/${id}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((response) => {
      dispatch(fetchCurrentPlaylistTracksSucces(response.data));
      console.log("from action fetchTracks:", response.data);
    });
  };
};
