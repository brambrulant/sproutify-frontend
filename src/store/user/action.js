import axios from "axios";

import queryString from "querystring";
// const axiosThrottle = require('axios-throttle');

export const fetchTrackDataSucces = (data, name) => ({
  type: "userTracks/fetchTrackDataSucces",
  payload: data,
  payloadName: name,
});
export const setLoading = (loading) => ({
  type: "userTracks/setLoading",
  payload: loading,
});

export const fetchUserData = () => {
  // axiosThrottle.init(axios,200);
  const query = queryString.parse(window.location.search);
  const token = query["?access_token"];
  console.log(token);

  return async (dispatch) => {
    const header = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    const headerWithParams = {
      method: "GET",
      params: {
        limit: 50,
      },
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    await axios(
      `https://api.spotify.com/v1/me/top/tracks`,
      headerWithParams
    ).then((response) => {
      console.log("--!!--!!--!!--!!--!!", response.data.items.length);

      response.data.items.map((track) => {
        //
        // console.log("trackId", track.id);
        // console.log("track.artists", track.artists);
        return axios
          .all([
            axios(
              `https://api.spotify.com/v1/audio-features/${track.id}`,
              header
            ),
            axios(
              `https://api.spotify.com/v1/audio-analysis/${track.id}`,
              header
            ),
            axios(
              `https://api.spotify.com/v1/artists/${track.artists[0].id}`,
              header
            ),
          ])
          .then(
            axios.spread((...responses) => {
              // console.log("what's responses", responses, track.name);
              dispatch(fetchTrackDataSucces(responses, track.name));
            })
          )
          .catch((errors) => {
            // console.log("errors", errors);
          });
      });
    });
  };
};
