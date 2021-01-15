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
        const x = p.map(track.analysis.beats.length, 0, 1200, 0, width);
        const y = p.map(track.analysis.segments.length, 0, 3000, 0, height / 2);
        const circleWidth = p.map(track.analysis.bars.length, 0, 300, 1, 10);

        p.circle(x, y, circleWidth);
      });
    }
  };

  p.draw = function () {
    //p.myCustomRedrawAccordingToNewPropsHandler();
  };
}
