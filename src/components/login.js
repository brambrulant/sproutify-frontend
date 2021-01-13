import React from "react";

const Login = (props) => {
  console.log("whatever in login component?", props.props);
  if (!props.props) {
    return (
      <a className="login-a" href="https://sproutify-backend.herokuapp.com/">
        {" "}
        LOGIN
      </a>
    );
  } else {
    return (
      <a className="login-a" href="https://sproutify-backend.herokuapp.com/">
        {" "}
        LOGOUT
      </a>
    );
  }
};

export default Login;
