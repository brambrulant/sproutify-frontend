import { Card } from "react-bootstrap";
import React from "react";

const TrackData = (track) => {
  console.log("do i get some props?", track.track);
  return (
    <div>
      <div>
        <Card>
          <h3>
            track: {track.track.name} artist: {track.track.artist.name}{" "}
          </h3>
          <ol>
            <li>acousticness: {track.track.features.acousticness} </li>
            <li>danceability: {track.track.features.danceability}</li>
            <li>duration_ms: {track.track.features.duration_ms}</li>
            <li>energy: {track.track.features.energy}</li>
            <li>instrumentalness: {track.track.features.instrumentalness}</li>
            <li>key: {track.track.features.key}</li>
            <li>liveness: {track.track.features.liveness}</li>
            <li>loudness: {track.track.features.loudness}</li>
            <li>mode: {track.track.features.mode}</li>
            <li>speechiness: {track.track.features.speechiness}</li>
            <li>tempo: {track.track.features.tempo}</li>
            <li>time_signature: {track.track.features.time_signature}</li>
            <li>valence: {track.track.features.valence}</li>
            <li>bars: {track.track.analysis.bars.length} </li>
            <li>beats: {track.track.analysis.beats.length}</li>
            <li>sections: {track.track.analysis.sections.length}</li>
            <li>segments: {track.track.analysis.segments.length}</li>
            <li>tatums: {track.track.analysis.tatums.length}</li>

            <li>
              genres:
              {track.track.artist.genres.map((genre) => (
                <ul key={genre}>
                  <li>{genre}</li>
                </ul>
              ))}
            </li>
          </ol>
        </Card>
      </div>
    </div>
  );
};

export default TrackData;
