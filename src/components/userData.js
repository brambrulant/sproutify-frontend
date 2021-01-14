import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selector";
import UserTracks from "./userTracks";

// import sketch2 from "../sketch2.js";

const UserData = () => {
  return (
    <div>
      <UserTracks className="App-header" />
    </div>
  );
};

export default UserData;
