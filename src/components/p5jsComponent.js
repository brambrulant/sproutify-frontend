import React from "react";
import P5Wrapper from "react-p5-wrapper";
import { useSelector } from "react-redux";

//import sketch3 from "../sketch3.js";
import sketch4 from "../sketches/sketch4.js";
import { selectUserTracks } from "../store/user/selector";

const P5sketchComponent = () => {
  const tracks = useSelector(selectUserTracks);

  //console.log("tracks in p5sketchComponent wrapper thing?", tracks);
  return (
    <div>
      {/* <P5Wrapper sketch={sketch2} rerender={props} /> */}
      {/* <P5Wrapper sketch={sketch} playlist={playlist} rerender={props} /> */}
      {tracks.loading === false ? (
        <P5Wrapper sketch={sketch4} tracks={tracks.userTracks} />
      ) : null}
    </div>
  );
};

export default P5sketchComponent;
