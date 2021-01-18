import axios from "axios";

import queryString from "querystring";

export const fetchTrackDataSucces = (track, data) => ({
  type: "userTracks/fetchTrackDataSucces",
  name: track,
  features: data[0].data,
  analysis: data[1].data,
  artist: data[2].data,
});

export const setLoading = (loading) => ({
  type: "userTracks/setLoading",
  payload: loading,
});

export const fetchUserData = () => {
  const query = queryString.parse(window.location.search);
  const token = query["?access_token"];

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
    ).then(async (response) => {
      //console.log("--!!--!!--!!--!!--!!", response.data.items.length);

      for (let i = 0; i < response.data.items.length; i++) {
        //console.log("what's i", i);
        const track = response.data.items[i];
        const urls = [
          `https://api.spotify.com/v1/audio-features/${track.id}`,
          `https://api.spotify.com/v1/audio-analysis/${track.id}`,
          `https://api.spotify.com/v1/artists/${track.artists[0].id}`,
        ];

        var array = [];
        for (let j = 0; j < urls.length; j++) {
          //console.log(j)
          const url = urls[j];
          try {
            array.push(await axios(url, header));
            // console.log("for loop axios", response.data);
            array.length === 3
              ? dispatch(fetchTrackDataSucces(track.name, array))
              : console.log("not 3 yet");
          } catch (e) {
            console.log(e);
          }
        }
      }
      // response.data.items.map((track) => {
      //   //
      //   // console.log("trackId", track.id);
      //   // console.log("track.artists", track.artists);
      //   return axios
      //     .all([
      //       axios(
      //         `https://api.spotify.com/v1/audio-features/${track.id}`,
      //         header
      //       ),
      //       axios(
      //         `https://api.spotify.com/v1/audio-analysis/${track.id}`,
      //         header
      //       ),
      //       axios(
      //         `https://api.spotify.com/v1/artists/${track.artists[0].id}`,
      //         header
      //       ),
      //     ])
      //     .then(
      //       axios.spread((...responses) => {
      //         // console.log("what's responses", responses, track.name);
      //         dispatch(fetchTrackDataSucces(responses, track.name));
      //       })
      //     )
      //     .catch((errors) => {
      //       // console.log("errors", errors);
      //     });
      // });
    });
  };
};
