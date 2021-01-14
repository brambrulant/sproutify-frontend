import { Card } from "react-bootstrap";
import React from "react";
import { useSelector } from "react-redux";
import { selectTrackData } from "../store/trackData/selector";

// import sketch2 from "../sketch2.js";

const TrackData = () => {
  const trackData = useSelector(selectTrackData);
  console.log("trackdata in trackdata component", trackData);
  console.log("loading in tracks component", trackData.loading);
  console.log(trackData.danceability);
  return (
    <div>
      {trackData.loading === false ? (
        <Card>
          <ol>
            <li>acousticness: {trackData.trackData.acousticness} </li>
            <li>danceability: {trackData.trackData.danceability}</li>
            <li>duration_ms: {trackData.trackData.duration_ms}</li>
            <li>energy: {trackData.trackData.energy}</li>
            <li>instrumentalness: {trackData.trackData.instrumentalness}</li>
            <li>key: {trackData.trackData.key}</li>
            <li>liveness: {trackData.trackData.liveness}</li>
            <li>loudness: {trackData.trackData.loudness}</li>
            <li>mode: {trackData.trackData.mode}</li>
            <li>speechiness: {trackData.trackData.speechiness}</li>
            <li>tempo: {trackData.trackData.tempo}</li>
            <li>time_signature: {trackData.trackData.time_signature}</li>
            <li>valence: {trackData.trackData.valence}</li>
          </ol>
        </Card>
      ) : null}
    </div>
  );
};

export default TrackData;
