import { Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import queryString from "querystring";
import axios from "axios";

function App() {
  const query = queryString.parse(window.location.search);
  const token = query["?access_token"];
  console.log(token);

  getMe();

  async function getMe() {
    await axios
      .get("https://api.spotify.com/v1/me/top/tracks", {
        headers: {
          Authorization: "Bearer" + token,
        },
      })
      .then(function (response) {
        console.log("top tracks?", response);
      });
  }

  return (
    <div className="App-header">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
