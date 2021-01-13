const initialState = {
  loading: true,
  user: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case "playlist/fetchUserSucces":
      return {
        loading: false,
        user: action.payload,
      };

    default:
      return state;
  }
};
