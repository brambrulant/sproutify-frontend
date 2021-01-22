import React from "react";
import { ProgressBar, Spinner } from "react-bootstrap";
import P5Wrapper from "react-p5-wrapper";
import { useSelector } from "react-redux";

//import sketch3 from "../sketch3.js";
import Sketch5 from "../sketches/sketch5.js";
import { selectUserTracks } from "../store/user/selector";
import TrackData from "./trackData";
import TrackList from "./trackList.js";

const P5sketchComponent = (object) => {
  const tracks = useSelector(selectUserTracks);

  const getInfo = () => {
    console.log("info!");
  };

  console.log("what a show", tracks);
  return (
    <div className="App-header">
      {/* <P5Wrapper sketch={sketch2} rerender={props} /> */}
      {/* <P5Wrapper sketch={sketch} playlist={playlist} rerender={props} /> */}
      {tracks.loading === false ? (
        <div>
          <P5Wrapper
            sketch={Sketch5}
            props={{
              tracks: tracks.userTracks,
              selectedTracks: object.props.value,
            }}
          />
          <div className="ui">
            <TrackData />

            <TrackList />
          </div>
        </div>
      ) : (
        <div>
          {tracks.loading === true ? (
            <div>
              <p>getting you your {object.props.value} favourite tracks</p>
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
