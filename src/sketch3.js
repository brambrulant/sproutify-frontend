export default function sketch(p) {
  const width = 1400; // declare width of canvas
  const height = 800; // declare height of canvas

  p.setup = function (props) {
    p.createCanvas(width, height);
    //p.background(240, 232, 221);
    p.background(0);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (tracks) {
    console.log("does this work?", tracks.tracks);
    if (tracks.tracks.length > 5) {
      tracks.tracks.map((track) => {
        const beats = p.map(track.analysis.beats.length, 0, 1200, 0, width);
        const segments = p.map(
          track.analysis.segments.length,
          0,
          3000,
          0,
          height / 2
        );
        const bars = p.map(track.analysis.bars.length, 0, 300, 1, 50);
        const red = p.map(track.features.instrumentalness, 0, 1, 0, 255);
        const green = p.map(track.features.acousticness, 0, 1, 0, 255);
        const blue = p.map(track.features.valence, 0, 1, 255, 0);
        const danceAbility = p.map(track.features.danceability, 0, 1, 0, 1);
        const energy = p.map(track.features.energy, 0, 1, 0, 255);

        p.fill(red, green, blue, energy);
        console.log("hello!", beats, segments);
        p.circle(beats, segments, bars);
        //p.text(track.name, i + 100, height / 2);
      });
    }
  };

  p.draw = function () {
    //p.myCustomRedrawAccordingToNewPropsHandler();
  };
}
