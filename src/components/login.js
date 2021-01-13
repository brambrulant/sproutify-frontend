import React from "react";

const Login = (props) => {
  console.log("whatever in login component?", props.props);
  if (!props.props) {
    return (
      <a className="login-a" href="http://localhost:4000">
        {" "}
        LOGIN
      </a>
    );
  } else {
    return (
      <a className="login-a" href="http://localhost:4000">
        {" "}
        LOGOUT
      </a>
    );
  }
};

export default Login;
