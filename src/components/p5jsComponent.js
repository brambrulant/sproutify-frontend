import React from "react";
import { ProgressBar, Spinner } from "react-bootstrap";
import P5Wrapper from "react-p5-wrapper";
import { useSelector } from "react-redux";

//import sketch3 from "../sketch3.js";
import Sketch5 from "../sketches/sketch5.js";
import { selectUserTracks } from "../store/user/selector";

const P5sketchComponent = (object) => {
  const tracks = useSelector(selectUserTracks);

  console.log("what a show", object);
  return (
    <div>
      {/* <P5Wrapper sketch={sketch2} rerender={props} /> */}
      {/* <P5Wrapper sketch={sketch} playlist={playlist} rerender={props} /> */}
      {tracks.userTracks.length === object.props.value ? (
        <P5Wrapper
          sketch={Sketch5}
          props={{
            tracks: tracks.userTracks,
            selectedTracks: object.props.value,
          }}
        />
      ) : (
        <div>
          {object.props.show ? (
            <div>
              <p>getting your your {object.props.value} favourite tracks</p>
              <ProgressBar
                max={object.props.value}
                now={tracks.userTracks.length}
                label={`${Math.round(
                  (tracks.userTracks.length / object.props.value) * 100
                )}%`}
              />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default P5sketchComponent;
