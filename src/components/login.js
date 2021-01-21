import React from "react";

const Login = () => {
  console.log("backendlogin .env", process.env.REACT_APP_BACKEND_LOGIN);
  return (
    <div className="Login-header">
      <button
        className="big-button"
        onClick={() =>
          (window.location.href = process.env.REACT_APP_BACKEND_LOGIN)
        }
      >
        Login
      </button>
    </div>
  );
};

export default Login;
//process.env.BACKEND_LOGIN
