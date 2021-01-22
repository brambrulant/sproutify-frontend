import { useEffect, useState } from "react";
import "../App.css";
import "./button.css";
import "./slider.css";
//import P5sketchComponent from "./p5jsComponent";
import { useDispatch } from "react-redux";
import { fetchPlaylist } from "../store/playlist/action";
import { fetchUserData } from "../store/user/action";
import { setUserStore } from "../store/user/action";
import UserData from "./userData";
import PlaylistData from "./playlistData";
import Header from "./header";
import P5sketchComponent from "./p5jsComponent";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";

function Home() {
  console.log("hello?");
  //const [props, set_props] = useState(0);
  const [value, setValue] = useState(20);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const fetchingPlaylist = () => {
    console.log("fetching!!");
    dispatch(fetchPlaylist());

    //set_showbutton(true);
  };

  const onSubmitHandler = (value, timeRange) => {
    console.log("BUTTONCLICK!", timeRange);
    dispatch(setUserStore());
    dispatch(fetchUserData(value, timeRange));
    setShow(true);
  };

  return (
    <div>
      <Header />

      <div className="ui">
        <div className="custom-h4">select number of songs</div>
        <span className="small-button">{value}</span>
        <div class="slidecontainer">
          <input
            type="range"
            min={1}
            max={50}
            value={value}
            onChange={(e) => setValue(parseInt(e.target.value))}
            class="slider"
            id="myRange"
          />
        </div>

        <div className="custom-h4">select timerange</div>
        <div className="range-buttons">
          <button
            className="big-button"
            onClick={() => onSubmitHandler(value, "short_term")}
          >
            last 4 weeks
          </button>
          <button
            className="big-button"
            onClick={() => onSubmitHandler(value, "medium_term")}
          >
            last 6 months
          </button>
          <button
            className="big-button"
            onClick={() => onSubmitHandler(value, "long_term")}
          >
            all time
          </button>
        </div>
      </div>

      <P5sketchComponent
        props={{ value: value, show: show }}
        className="sketch"
      />
    </div>
  );
}

export default Home;
