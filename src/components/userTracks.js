import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTracks } from "../store/playlistTracks/selector";
import { fetchTrackData } from "../store/trackData/action";
import { selectUser } from "../store/user/selector";
import TrackData from "./trackData";

// import sketch2 from "../sketch2.js";

const UserTracks = (id) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onClickHandler = (trackId, artistId) => {
    console.log("trackId", trackId);
    dispatch(fetchTrackData(trackId, artistId));
  };

  return (
    <div>
      <h1> your 20 most listened tracks of the last 6 months</h1>
      <TrackData />
      {user.loading === false ? (
        user.user.items.map((track) => {
          return (
            <ul key={Math.random() * Math.random() * 100000}>
              <button
                className="big-button"
                onClick={() => onClickHandler(track.id, track.artists[0].id)}
              >
                {track.name}
              </button>
            </ul>
          );
        })
      ) : (
        <p>loading... </p>
      )}
    </div>
  );
};

export default UserTracks;
