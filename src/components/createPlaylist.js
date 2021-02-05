import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { selectUserTracks } from "../store/user/selector";
import "./table.css";
import queryString from "querystring";

const CreatePlaylist = () => {
  const tracks = useSelector(selectUserTracks);

  const query = queryString.parse(window.location.search);
  const token = query["?access_token"];

  const onClickHandler = async () => {
    console.log("onclick create playlist");
    const header = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    await axios(`https://api.spotify.com/v1/me`, header).then((response) => {
      const user_id = response.data.id;
      console.log("user response", response.data.id);
      createPlaylist(user_id);
    });
  };

  const createPlaylist = async (user_id) => {
    const headerCreatePlaylist = {
      method: "POST",
      data: {
        name: `Sproutify${Math.random() * 100}`,
        public: false,
      },
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    const url = `https://api.spotify.com/v1/users/${user_id}/playlists`;
    await axios(url, headerCreatePlaylist).then((response) => {
      const playlist_id = response.data.id;
      console.log("create playlist", response.data.id);
      addTracks(playlist_id);
    });
  };

  const addTracks = async (playlist_id) => {
    console.log("tracks? in addtracks", tracks);
    console.log();
    const url = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`;

    const trackUris = tracks.userTracks.map((track) => {
      return track.features.uri;
    });

    await axios(url, {
      method: "POST",
      data: {
        uris: trackUris,
      },
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };

  return (
    <div>
      <button className="big-button" onClick={() => onClickHandler()}>
        create playlist
      </button>
    </div>
  );
};
export default CreatePlaylist;
