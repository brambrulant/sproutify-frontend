import { Card } from "react-bootstrap";
import React from "react";
import { useSelector } from "react-redux";
import { selectUserTracks } from "../store/user/selector";

const TrackData = (track) => {
  const tracks = useSelector(selectUserTracks);

  console.log("do i get some index numbers?", tracks);

  const onClickHandler = (index) => {};

  let totalMode = 0;
  let day = "";
  let mode = "";
  let stars = "";
  for (let i = 0; i < tracks.userTracks.length; i++) {
    totalMode += tracks.userTracks[i].features.mode;
  }
  const modeavg = Math.round(totalMode / tracks.userTracks.length);

  switch (modeavg) {
    case 0:
      day = "night";
      mode = "minor";
      break;
    case 1:
      day = "daytime";
      mode = "major";
      break;
    default:
  }
  let totalValence = 0;
  let season = "";
  let valence = "";
  let amount = 0;
  for (let i = 0; i < tracks.userTracks.length; i++) {
    totalValence += tracks.userTracks[i].features.valence;
    amount += tracks.userTracks[i].analysis.sections.length;
  }
  const valenceAvg = Math.round(totalValence / tracks.userTracks.length);

  switch (valenceAvg) {
    case 0:
      season = "autumn";
      valence = "meloncholic";
      stars = "stars";
      break;
    case 1:
      season = "spring";
      valence = "cheerful";
      stars = "stars";
      break;
    default:
  }
  console.log("valence", valenceAvg, season, valence);
  return (
    <card className="track-data">
      it's <i>{day}</i> because you tend to listen to songs in <i>{mode}</i>.
      and it's <i>{season}</i> because you've listened to more <i>{valence}</i>{" "}
      songs. There are{" "}
      <i>
        {amount} {stars}
      </i>{" "}
      based on the amount of sections these songs have combined. Each tree
      represents one track. The numbers are corresponding with the list below.
      the anatomy of the tree is determined by a few factors. Big trees are more
      energetic tracks. The number of recursions is dependent on the amount of
      bars. Trees on the right are more instrumental and the trees higher up in
      the mountains, are more acoustic tracks.
    </card>
  );
};

export default TrackData;
