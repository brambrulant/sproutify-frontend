export default function sketch4(p) {
  const width = 1400; // declare width of canvas
  const height = 800; // declare height of canvas
  let angle;
  let thickness;
  let n;

  p.setup = function (props) {
    p.createCanvas(width, height);
    //p.background(240, 232, 221);
    p.stroke(255);
    p.background(240, 232, 221);
    // angle = p.random() * 180;
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (tracks) {
    if (tracks.tracks.length === 50) {
      p.background(240, 232, 221);
      console.log(tracks.tracks);
      let totalBars = 0;
      let totalEnergy = 0;
      let totalInstrumentalness = 0;
      for (let i = 0; i < tracks.tracks.length; i++) {
        totalBars += tracks.tracks[i].analysis.bars.length;
        totalEnergy += tracks.tracks[i].features.energy;
        totalInstrumentalness += tracks.tracks[i].features.instrumentalness;
      }
      angle = totalBars / tracks.tracks.length;
      thickness = p.map(totalEnergy / tracks.tracks.length, 0, 1, 1, 10);
      n = p.map(totalInstrumentalness / tracks.tracks.length, 0, 1, 1, 5);
      console.log("angle", angle);
      console.log("thickness", thickness);
      console.log("n", n);
      p.tree(width / 2, height, 300, angle, 0.5, n, thickness, 0);
      // p.noLoop();
    } else if (tracks.tracks.length < 50) {
      p.text("loading...", width / 2, height / 2, 200, 200);
    }
  };

  p.draw = function () {
    p.translate(width / 2, height);
    p.fill(255);
  };

  p.tree = function (x, y, len, angle, scl, n, thickness, startingColor) {
    p.stroke(startingColor, 100, 100);
    p.strokeWeight(thickness);
    p.line(0, 0, 0, -len);
    p.translate(0, -len);
    if (len > 1) {
      for (let i = 0; i < n; i++) {
        p.push();
        p.rotate(-angle + (2 * angle * i) / (n - 1));
        p.tree(
          0,
          0,
          len * scl,
          angle,
          scl,
          n,
          thickness - 2,
          startingColor + 20
        );
        p.pop();
      }
    }
  };
}
