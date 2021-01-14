import axios from "axios";
import queryString from "querystring";

export const fetchTrackAudioFeaturesSucces = (features) => ({
  type: "trackData/fetchTrackAudioFeaturesSucces",
  payload: features,
});

export const fetchTrackAudioAnalysisSucces = (analysis) => ({
  type: "trackData/fetchTrackAudioAnalysisSucces",
  payload: analysis,
});

export const fetchTrackAudioFeatures = (id) => {
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
    })
      .then((response) => {
        dispatch(fetchTrackAudioFeaturesSucces(response.data));
        console.log("from action fetchTracks:", response.data);
      })
      .then(() => {
        axios(`https://api.spotify.com/v1/audio-analysis/${id}`, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        }).then((analysisResponse) => {
          dispatch(fetchTrackAudioAnalysisSucces(analysisResponse.data));
          console.log("from action fetchTracks:", analysisResponse.data);
        });
      });
  };
};
