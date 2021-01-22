import React from "react";
import logo from "../sproutify.gif";

const Login = () => {
  console.log("backendlogin .env", process.env.REACT_APP_BACKEND_LOGIN);
  return (
    <div className="ui">
      <img src={logo} alt="logo" width="500" height="300" />
      <div className="custom-h4">
        fractal trees, based on your spotify behaviour
      </div>
      <button
        className="big-button"
        onClick={() =>
          (window.location.href = process.env.REACT_APP_BACKEND_LOGIN)
        }
      >
        Login to Spotify
      </button>
    </div>
  );
};

export default Login;
//process.env.BACKEND_LOGIN
