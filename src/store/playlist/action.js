import axios from "axios";
import { Credentials } from "../../Credentials.js";

export const fetchPlaylistSucces = (playlist) => ({
  type: "playlist/fetchPlaylistSucces",
  payload: playlist,
});

export const fetchTokenSucces = (token) => ({
  type: "playlist/fetchTokenSucces",
  payload: token,
});

export const fetchPlaylist = () => {
  const spotify = Credentials();

  console.log("FETCH SONG FROM SPOTIFY?");

  return async (dispatch) => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      dispatch(fetchTokenSucces(tokenResponse.data.access_token));
      console.log("hello?");
      //https://open.spotify.com/playlist/4HtJsjqgRgmhoqh69pPQGJ?si=FoiLympASfGoLRkyk6NU4A
      axios(
        `https://api.spotify.com/v1/playlists/4HtJsjqgRgmhoqh69pPQGJ?si=FoiLympASfGoLRkyk6NU4A`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + tokenResponse.data.access_token,
          },
        }
      ).then((response) => {
        dispatch(fetchPlaylistSucces(response.data));
        console.log("from action fetch playlist:", response.data);
      });
    });
  };
};
