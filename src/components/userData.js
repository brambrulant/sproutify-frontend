import React from "react";
import { useSelector } from "react-redux";
import TrackData from "./trackData";
import { selectUserTracks } from "../store/user/selector";
import P5sketchComponent from "./p5jsComponent";

// import sketch2 from "../sketch2.js";

const UserData = () => {
  const state = useSelector(selectUserTracks);
  // console.log("do i get some trackdata here yo?", state);
  // console.log("state loading?", state.loading);
  return (
    <div>
      {state.loading === false ? (
        // ?
        <div>
          <P5sketchComponent className="sketch2" />
          {state.userTracks.map((track) => {
            //console.log("blabdieliablija", track);
            return <TrackData track={track} />;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default UserData;
