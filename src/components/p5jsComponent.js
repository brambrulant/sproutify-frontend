import React from "react";
import { ProgressBar, Spinner } from "react-bootstrap";
import P5Wrapper from "react-p5-wrapper";
import { useSelector } from "react-redux";
import "./p5Component.css";

//import sketch3 from "../sketch3.js";
import Sketch5 from "../sketches/sketch5.js";
import { selectUserTracks } from "../store/user/selector";

const P5sketchComponent = (object) => {
  const tracks = useSelector(selectUserTracks);

  const getInfo = () => {
    console.log("info!");
  };

  console.log("what a show", tracks);
  return (
    <div>
      {/* <P5Wrapper sketch={sketch2} rerender={props} /> */}
      {/* <P5Wrapper sketch={sketch} playlist={playlist} rerender={props} /> */}
      {tracks.userTracks.length === object.props.value ? (
        <div>
          <P5Wrapper
            variant="custom"
            sketch={Sketch5}
            props={{
              tracks: tracks.userTracks,
              selectedTracks: object.props.value,
            }}
          />
          <button className="big-button" onClick={() => getInfo()}>
            ?
          </button>
        </div>
      ) : (
        <div>
          {tracks.loading === false ? (
            <div>
              <p>getting your your {object.props.value} favourite tracks</p>
              <ProgressBar
                max={object.props.value}
                animated
                now={tracks.userTracks.length}
                label={`${Math.round(
                  (tracks.userTracks.length / object.props.value) * 100
                )}%`}
                style={{ background: "black", color: "black" }}
              />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default P5sketchComponent;
