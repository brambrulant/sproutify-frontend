import { Alert } from "react-bootstrap";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPlaylist } from "../store/playlist/selector";
import { fetchCurrentPlaylistTracks } from "../store/playlistTracks/actions";
import Tracks from "./tracks";

// import sketch2 from "../sketch2.js";

const PlaylistData = (id) => {
  const dispatch = useDispatch();
  const playlist = useSelector(selectPlaylist);
  console.log("playlist in showData component", playlist);
  console.log("loading in showData component", playlist.loading);

  function onClickHandler(id) {
    console.log("hello?", id);
    dispatch(fetchCurrentPlaylistTracks(id));
    <Alert>{id}</Alert>;
  }

  return (
    <div className="button">
      {playlist.loading === false ? (
        playlist.playlist.items.map((playlist) => {
          return (
            <button
              key={playlist.id}
              className="big-button"
              onClick={() => onClickHandler(playlist.id)}
            >
              {playlist.name}
            </button>
          );
        })
      ) : (
        <p>loading... </p>
      )}
      <Tracks className="App-header" />
    </div>
  );
};

export default PlaylistData;
