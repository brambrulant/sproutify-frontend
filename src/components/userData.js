import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selector";

// import sketch2 from "../sketch2.js";

const UserData = () => {
  const playlist = useSelector(selectUser);
  console.log("user in userData component", playlist.user);
  const user = playlist.user;

  return (
    <div>
      <div>
        <h3>{user.display_name}</h3>
      </div>
    </div>
  );
};

export default UserData;
