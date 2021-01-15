const initialState = {
  loading: true,
  userTracks: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case "userTracks/fetchTrackDataSucces":
      return {
        ...state,
        loading: false,
        userTracks: [
          ...state.userTracks,
          {
            name: action.payloadName,
            features: action.payload[0].data,
            analysis: action.payload[1].data,
            artist: action.payload[2].data,
          },
        ],
      };

    default:
      return state;
  }
};
