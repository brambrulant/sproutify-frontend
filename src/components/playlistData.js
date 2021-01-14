import React from "react";
import { useSelector } from "react-redux";
import { selectPlaylist } from "../store/playlist/selector";

// import sketch2 from "../sketch2.js";

const PlaylistData = (props) => {
  const playlist = useSelector(selectPlaylist);
  console.log("playlist in showData component", playlist);
  console.log("loading in showData component", playlist.loading);

  return (
    <div>
      {playlist.loading === false ? (
        playlist.playlist.items.map((playlist) => {
          return <option key={playlist.id}>{playlist.name}</option>;
        })
      ) : (
        <p>loading... </p>
      )}
    </div>
  );
};

export default PlaylistData;
