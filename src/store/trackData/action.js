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

export const fetchArtistSucces = (artist) => ({
  type: "trackData/fetchArtistSucces",
  payload: artist,
});

export const fetchTrackData = (trackId, artistId) => {
  const query = queryString.parse(window.location.search);
  const token = query["?access_token"];
  console.log(token);

  return async (dispatch) => {
    const features = `https://api.spotify.com/v1/audio-features/${trackId}`;
    const analysis = `https://api.spotify.com/v1/audio-analysis/${trackId}`;
    const artist = `https://api.spotify.com/v1/artists/${artistId}`;

    const header = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    const requestFeatures = axios(features, header);
    const requestAnalysis = axios.get(analysis, header);
    const requestArtist = axios.get(artist, header);

    axios
      .all([requestFeatures, requestAnalysis, requestArtist])
      .then(
        axios.spread((...responses) => {
          dispatch(fetchTrackAudioFeaturesSucces(responses[0]));
          dispatch(fetchTrackAudioAnalysisSucces(responses[1]));
          dispatch(fetchArtistSucces(responses[2]));
        })
      )
      .catch((errors) => {
        console.log("errors", errors);
      });
  };
};
