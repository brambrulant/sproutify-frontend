import React from "react";

const Header = () => {
  return (
    <div className="App-header">
      <h2 className="title">
        <u>
          {" "}
          <h1 href="/">sproutify</h1>
        </u>
      </h2>
      <p className="subtitle">
        <small>
          <i>
            <u>fractal </u>
          </i>{" "}
        </small>{" "}
        <b>trees</b>{" "}
        <small>
          <i>
            <u>designed by</u>
          </i>{" "}
        </small>{" "}
        {"  "}
        <b> your spotify behaviour</b>
      </p>
    </div>
  );
};

export default Header;
