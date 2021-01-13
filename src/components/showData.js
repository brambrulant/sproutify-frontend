import React from "react";
import { useSelector } from "react-redux";
import { selectPlaylist } from "../store/playlist/selector";

// import sketch2 from "../sketch2.js";

const ShowData = (props) => {
  const playlist = useSelector(selectPlaylist);
  console.log("playlist in showData component", playlist);
  console.log(
    "playlist.length in showdata component",
    playlist.playlist.length
  );

  return (
    <div>
      <p>
        {playlist.loading === false ? (
          playlist.playlist.tracks.items.map((track) => {
            return <p> {track.track.name} </p>;
          })
        ) : (
          <p>click on fetch playlist</p>
        )}
      </p>
    </div>
  );
};

export default ShowData;
