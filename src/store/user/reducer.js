const initialState = {
  loading: true,
  userTracks: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    // case "userTracks/fetchTrackDataSucces":
    //   return {
    //     ...state,
    //     loading: false,
    //     userTracks: [
    //       ...state.userTracks,
    //       {
    //         name: action.payloadName,
    //         features: action.payload[0].data,
    //         analysis: action.payload[1].data,
    //         artist: action.payload[2].data,
    //       },
    //     ],
    //   };
    case "userTracks/fetchTrackDataSucces":
      //console.log(action.payload);
      return {
        ...state,
        loading: false,
        userTracks: [
          ...state.userTracks,
          {
            name: action.name,
            features: action.features,
            analysis: action.analysis,
            artist: action.artist,
          },
        ],
      };
    case "userTracks/setStore":
      //console.log(action.payload);
      return {
        ...state,
        loading: true,
        userTracks: [],
      };

    default:
      return state;
  }
};
