import { Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
    </Switch>
  );
}

export default App;
