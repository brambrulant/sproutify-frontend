const initialState = {
  loading: true,
  trackFeatures: {},
  trackAnalysis: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case "trackData/fetchTrackAudioFeaturesSucces":
      return {
        trackData: action.payload,
        loading: true,
      };
    case "trackData/fetchTrackAudioAnalysisSucces":
      return {
        ...state,
        trackAnalysis: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
