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
        <div>
          <Card>
            <ol>
              <li>acousticness: {trackData.trackData.data.acousticness} </li>
              <li>danceability: {trackData.trackData.data.danceability}</li>
              <li>duration_ms: {trackData.trackData.data.duration_ms}</li>
              <li>energy: {trackData.trackData.data.energy}</li>
              <li>
                instrumentalness: {trackData.trackData.data.instrumentalness}
              </li>
              <li>key: {trackData.trackData.data.key}</li>
              <li>liveness: {trackData.trackData.data.liveness}</li>
              <li>loudness: {trackData.trackData.data.loudness}</li>
              <li>mode: {trackData.trackData.data.mode}</li>
              <li>speechiness: {trackData.trackData.data.speechiness}</li>
              <li>tempo: {trackData.trackData.data.tempo}</li>
              <li>time_signature: {trackData.trackData.data.time_signature}</li>
              <li>valence: {trackData.trackData.data.valence}</li>
              <li>bars: {trackData.trackAnalysis.data.bars.length} </li>
              <li>beats: {trackData.trackAnalysis.data.beats.length}</li>
              <li>sections: {trackData.trackAnalysis.data.sections.length}</li>
              <li>segments: {trackData.trackAnalysis.data.segments.length}</li>
              <li>tatums: {trackData.trackAnalysis.data.tatums.length}</li>
              <li>artist: {trackData.trackArtist.data.name} </li>
              <li>
                genres:
                {trackData.trackArtist.data.genres.map((genre) => (
                  <ul key={genre}>
                    <li>{genre}</li>
                  </ul>
                ))}
              </li>
            </ol>
          </Card>
        </div>
      ) : null}
    </div>
  );
};

export default TrackData;
