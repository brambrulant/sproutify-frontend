const initialState = {
  loading: true,
  playlist: [],
  tracks: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case "playlist/fetchPlaylistSucces":
      return {
        loading: false,
        playlist: action.payload,
      };
    case "playlist/tracks":
      return {
        loading: false,
        playlist: action.payload,
      };

    default:
      return state;
  }
};
