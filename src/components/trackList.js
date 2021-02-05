import React from "react";
import { useSelector } from "react-redux";
import { selectUserTracks } from "../store/user/selector";
import "./table.css";

const TrackList = () => {
  const tracks = useSelector(selectUserTracks);

  return (
    <table>
      <td>
        <th>id</th>
        {tracks.userTracks.map((track, index) => {
          return <tr key={index}>{index + 1}</tr>;
        })}
      </td>
      <td>
        <th>tracks</th>
        {tracks.userTracks.map((track, index) => {
          return <tr key={index}>{track.name}</tr>;
        })}
      </td>
      <td>
        <th>artist</th>
        {tracks.userTracks.map((track, index) => {
          return <tr key={index}>{track.artist.name}</tr>;
        })}
      </td>
      <td>
        <th>mode</th>
        {tracks.userTracks.map((track, index) => {
          return (
            <tr key={index}>{track.features.mode === 0 ? "minor" : "major"}</tr>
          );
        })}
      </td>
      <td>
        <th>energy</th>
        {tracks.userTracks.map((track, index) => {
          return (
            <tr key={index}>{Math.round(track.features.energy * 100)}%</tr>
          );
        })}
      </td>
      <td>
        <th>instrumentalness</th>
        {tracks.userTracks.map((track, index) => {
          return (
            <tr key={index}>
              {Math.round(track.features.instrumentalness * 100)}%
            </tr>
          );
        })}
      </td>
      <td>
        <th>acousticness</th>
        {tracks.userTracks.map((track, index) => {
          return (
            <tr key={index}>
              {Math.round(track.features.acousticness * 100)}%
            </tr>
          );
        })}
      </td>
      <td>
        <th>happiness</th>
        {tracks.userTracks.map((track, index) => {
          return (
            <tr key={index}>{Math.round(track.features.valence * 100)}%</tr>
          );
        })}
      </td>
    </table>
  );
};

export default TrackList;
