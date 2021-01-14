import axios from "axios";
import queryString from "querystring";

export const fetchTrackDataSucces = (props) => ({
  type: "trackData/fetchTrackDataSucces",
  payload: props,
});

export const fetchTrackData = (id) => {
  const query = queryString.parse(window.location.search);
  const token = query["?access_token"];
  console.log(token);

  console.log("FETCH TRACKS FROM SPOTIFY?");

  return async (dispatch) => {
    axios(`https://api.spotify.com/v1/audio-features/${id}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((response) => {
      dispatch(fetchTrackDataSucces(response.data));
      console.log("from action fetchTracks:", response.data);
    });
  };
};
