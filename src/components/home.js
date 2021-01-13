import { useState } from "react";
import "../App.css";
import "./button.css";
//import P5sketchComponent from "./p5jsComponent";
import { useDispatch } from "react-redux";
import { fetchPlaylist } from "../store/playlist/action";
import ShowData from "./showData";

function Home() {
  const [props, set_props] = useState(0);
  const [showbutton, set_showbutton] = useState(false);
  const dispatch = useDispatch();

  const fetchings = () => {
    console.log("fetching!!");
    dispatch(fetchPlaylist());
    set_showbutton(true);
  };

  const proppings = () => {
    set_props(props + 1);
    set_showbutton(false);
  };

  console.log(props);
  return (
    <div className="App-header">
      <h2 className="title">
        <u>sproutify</u>
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
        <b> music</b>
      </p>
      <button
        className="big-button"
        onClick={() => {
          fetchings();
        }}
      >
        <u>fetch playlist</u>
      </button>

      {/* {showbutton === true ? (
        <button
          className="big-button"
          onClick={() => {
            proppings();
          }}
        >
          <u>sprout</u>
        </button>
      ) : (
        <div> ... </div>
      )} */}
      {/* <P5sketchComponent className="sketch2" props={props} /> */}
      {/* <P5sketchComponent className="sketch" props={props} /> */}
      <ShowData />
    </div>
  );
}

export default Home;
