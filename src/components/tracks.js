import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTracks } from "../store/playlistTracks/selector";
import { fetchTrackAudioFeatures } from "../store/trackData/action";
import TrackData from "./trackData";

// import sketch2 from "../sketch2.js";

const Tracks = (id) => {
  const dispatch = useDispatch();
  const tracks = useSelector(selectTracks);
  console.log("tracks in tracks component", tracks);
  console.log("loading in tracks component", tracks.loading);

  const onClickHandler = (trackId) => {
    console.log("trackId", trackId);
    dispatch(fetchTrackAudioFeatures(trackId));
  };

  return (
    <div>
      <TrackData />
      {tracks.loading === false ? (
        tracks.tracks.tracks.items.map((track) => {
          return (
            <ul key={track.track.id}>
              <button
                className="big-button"
                onClick={() => onClickHandler(track.track.id)}
              >
                {track.track.name}
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

export default Tracks;
