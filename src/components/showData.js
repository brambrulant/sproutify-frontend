import React from "react";
import { useSelector } from "react-redux";
import { selectPlaylist } from "../store/playlist/selector";

// import sketch2 from "../sketch2.js";

const ShowData = (props) => {
  const playlist = useSelector(selectPlaylist);
  console.log("playlist in showData component", playlist);

  return (
    <div>
      <div>
        {playlist.loading === false ? (
          playlist.playlist.tracks.items.map((track) => {
            return <p key={track.track.id}> {track.track.name} </p>;
          })
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default ShowData;
