export default function sketch4(p) {
  const width = 1400; // declare width of canvas
  const height = 800; // declare height of canvas
  let angle;
  let thickness;
  let n;
  let len;
  let scl;
  let r, g, b;

  p.setup = function (props) {
    p.createCanvas(width, height);
    //p.background(240, 232, 221);
    p.stroke(255);
    p.background(240, 232, 221);
    // angle = p.random() * 180;
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (tracks) {
    p.background(0);
    for (let j = 0; j < tracks.tracks.length; j++) {}
    if (tracks.tracks.length === 50) {
      console.log(tracks.tracks);
      let totalBars = 0;
      let totalEnergy = 0;
      let totalInstrumentalness = 0;
      let totalDuration = 0;
      let totalSections = 0;
      let totalR = 0;
      let totalG = 0;
      let totalB = 0;
      for (let i = 0; i < tracks.tracks.length; i++) {
        p.push();
        p.fill(1);
        p.circle(
          p.random() * width,
          p.map(p.random(), 0, 1, 0, height / 2),
          10
        );
        p.pop();
        totalBars += tracks.tracks[i].analysis.bars.length;
        totalEnergy += tracks.tracks[i].features.energy;
        totalInstrumentalness += tracks.tracks[i].features.instrumentalness;
        totalDuration += tracks.tracks[i].features.duration_ms;
        totalSections += tracks.tracks[i].analysis.sections.length;
        totalR += tracks.tracks[i].features.liveness;
        totalG += tracks.tracks[i].features.valence;
        totalB += tracks.tracks[i].features.acousticness;
      }
      angle = totalBars / tracks.tracks.length;
      thickness = p.map(totalEnergy / tracks.tracks.length, 0, 1, 1, 10);
      n = p.map(totalInstrumentalness / tracks.tracks.length, 0, 1, 1, 5);
      len = p.map(totalDuration / tracks.tracks.length, 0, 600000, 200, 600);
      scl = p.map(totalSections / tracks.tracks.length, 0, 30, 0.2, 0.5);
      r = p.map(totalR / tracks.tracks.length, 0, 1, 0, 122);
      g = p.map(totalG / tracks.tracks.length, 0, 1, 0, 122);
      b = p.map(totalB / tracks.tracks.length, 0, 1, 122, 0);
      p.background(r, g, b);

      console.log("average no. of bars => angle", angle);
      console.log("average no. of energy => thickness", thickness);
      console.log("average no. of instruments => n", n);
      console.log("average length of track => len", len);
      console.log("average no. of sections => scl", scl);
      console.log("r,g,b", r, g, b);
      p.translate(width / 2, height);
      p.tree(width / 2, height, len, angle, scl, n, thickness, 0);
      p.noLoop();
    } else if (tracks.tracks.length < 50) {
      p.textSize(30);
      p.text(
        "FETCHING YOUR DATA, AND PROCESSING IMAGE...",
        width / 4,
        height / 2,
        width,
        height
      );
    }
  };

  p.draw = function () {
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
          thickness * 0.8,
          startingColor + 20
        );
        p.pop();
      }
    }
  };
}
