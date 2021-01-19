import { useEffect, useState } from "react";
import "../App.css";
import "./button.css";
//import P5sketchComponent from "./p5jsComponent";
import { useDispatch } from "react-redux";
import { fetchPlaylist } from "../store/playlist/action";
import { fetchUserData } from "../store/user/action";
import UserData from "./userData";
import PlaylistData from "./playlistData";
import Header from "./header";

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

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  return (
    <div>
      <Header />
      <div className="body">
        <div className="button">
          <h3>Tree based on your top 50 listened tracks</h3>
          {/* <button
          className="big-button"
          onClick={() => {
            fetchingPlaylist();
            set_showPlaylist(true);
            set_showUser(false);
          }}
        >
          <u>fetch your playlists</u>
        </button> */}
          {/* <button
            className="big-button"
            onClick={() => {
              fetchingUser();
              set_showUser(true);
              set_showPlaylist(false);
            }}
          >
            <u>fetch your userData</u>
          </button>*/}
        </div>
        {/* <P5sketchComponent className="sketch2" props={props} /> */}
        {/* <P5sketchComponent className="sketch" props={props} /> */}
        <UserData />
        {/* {showPlaylist === true ? <PlaylistData /> : <p></p>} */}
      </div>
    </div>
  );
}

export default Home;
