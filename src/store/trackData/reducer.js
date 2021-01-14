const initialState = {
  loading: true,
  trackData: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case "trackData/fetchTrackDataSucces":
      return {
        trackData: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
