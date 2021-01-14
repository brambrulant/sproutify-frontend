import React from "react";

const Login = () => {
  return (
    <div className="App-header">
      <a href={process.env.BACKEND_LOGIN}>
        <button className="big-button">Login</button>
      </a>
    </div>
  );
};

export default Login;
