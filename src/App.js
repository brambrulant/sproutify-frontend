import { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import Hello from "./components/hello";

function App() {
  const [whatever, set_whatever] = useState();
  const history = useHistory();

  const handleCallback = ({ location }) => {
    set_whatever(location);
    console.log("whatever", whatever);
    if (whatever !== undefined) {
      history.push("/home");
    }
    return null;
  };

  return (
    <div className="App-header">
      <Route path="/home" component={Home} />
      <Route path="/hello" component={Hello} />
      <Route path="/api/v1/login" component={handleCallback} />
      <Login path="/" props={whatever} />
    </div>
  );
}

export default App;
