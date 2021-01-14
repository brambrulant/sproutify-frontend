import { useState } from "react";
import "../App.css";
import "./button.css";
//import P5sketchComponent from "./p5jsComponent";
import { useDispatch } from "react-redux";
import { fetchPlaylist } from "../store/playlist/action";
import { fetchUserData } from "../store/user/action";
import UserData from "./userData";
import PlaylistData from "./playlistData";

function Home() {
  console.log("hello?");
  //const [props, set_props] = useState(0);
  const [showUser, set_showUser] = useState(false);
  const [showPlaylist, set_showPlaylist] = useState(false);
  const dispatch = useDispatch();

  const fetchingPlaylist = () => {
    console.log("fetching!!");
    dispatch(fetchPlaylist());

    //set_showbutton(true);
  };

  const fetchingUser = () => {
    console.log("fetching!!", showUser);
    dispatch(fetchUserData());
  };

  //   const proppings = () => {
  //     set_props(props + 1);
  //     set_showbutton(false);
  //   };

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
      <div className="button">
        <button
          className="big-button"
          onClick={() => {
            fetchingPlaylist();
            set_showPlaylist(true);
          }}
        >
          <u>fetch playlist</u>
        </button>
        <button
          className="big-button"
          onClick={() => {
            fetchingUser();
            set_showUser(true);
          }}
        >
          <u>fetch user</u>
        </button>
      </div>
      {/* <P5sketchComponent className="sketch2" props={props} /> */}
      {/* <P5sketchComponent className="sketch" props={props} /> */}
      {showUser === true ? <UserData /> : <p></p>}
      {showPlaylist === true ? <PlaylistData /> : <p></p>}
    </div>
  );
}

export default Home;
