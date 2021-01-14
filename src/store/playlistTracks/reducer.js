const initialState = {
  loading: true,
  tracks: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case "tracks/fetchCurrentPlaylistSucces":
      return {
        tracks: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
