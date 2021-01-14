import axios from "axios";
import queryString from "querystring";

export const fetchUserSucces = (user) => ({
  type: "playlist/fetchUserSucces",
  payload: user,
});

export const fetchUserData = () => {
  const query = queryString.parse(window.location.search);
  const token = query["?access_token"];
  console.log(token);

  return async (dispatch) => {
    axios(`https://api.spotify.com/v1/me/top/tracks`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((response) => {
      dispatch(fetchUserSucces(response.data));
      console.log("from action fetchuserdata:", response.data);
    });
  };
};
