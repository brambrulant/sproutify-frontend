import { Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";

function App() {
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
