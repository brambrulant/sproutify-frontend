export default function sketch4(p) {
  const width = 1400; // declare width of canvas
  const height = 1400; // declare height of canvas
  let angle;
  let thickness;
  let n;
  let len = 0;
  let newLen = 0;
  let scl;
  let r, g, b;
  let c1, c2;
  let bgColor = 0;
  let totalBars = 0;
  let totalEnergy = 0;
  let totalInstrumentalness = 0;
  let totalDuration = 0;
  let totalSections = 0;
  let totalR = 0;
  let totalG = 0;
  let totalB = 0;
  let totalMode = 0;

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

      for (let i = 0; i < tracks.tracks.length; i++) {
        totalBars += tracks.tracks[i].analysis.bars.length;
        totalEnergy += tracks.tracks[i].features.energy;
        totalInstrumentalness += tracks.tracks[i].features.instrumentalness;
        totalDuration += tracks.tracks[i].features.duration_ms;
        totalSections += tracks.tracks[i].analysis.sections.length;
        totalR += tracks.tracks[i].features.liveness;
        totalG += tracks.tracks[i].features.valence;
        totalB += tracks.tracks[i].features.acousticness;
        totalMode += tracks.tracks[i].features.mode;
      }
      angle = p.map(totalBars / tracks.tracks.length, 0, 400, 0, 360);
      thickness = p.map(totalEnergy / tracks.tracks.length, 0, 1, 1, 10);
      n = p.map(totalInstrumentalness / tracks.tracks.length, 0, 1, 1, 5);
      //len = p.map(totalDuration / tracks.tracks.length, 0, 600000, 0, 1);
      len = 0;
      scl = p.map(totalSections / tracks.tracks.length, 0, 30, 0.4, 0.6);
      r = p.map(totalR / tracks.tracks.length, 0, 1, 0, 122);
      g = p.map(totalG / tracks.tracks.length, 0, 1, 0, 122);
      b = p.map(totalB / tracks.tracks.length, 0, 1, 122, 0);

      if (parseInt(totalMode / tracks.tracks.length) === 0) {
        bgColor = 0;
      } else if (parseInt(totalMode / tracks.tracks.length) === 1) {
        bgColor = 255;
      }
      console.log("major(1) or minor(0)", bgColor);
      // c1 = p.color(r);
      // c2 = p.color(r, g, b);

      // for (let y = 0; y < height; y++) {
      //   n = p.map(y, 0, height, 0, 1);
      //   let newc = p.lerpColor(c1, c2, n);
      //   p.stroke(newc);
      //   p.line(0, y, width, y);
      // }

      console.log("average no. of bars => angle", angle);
      console.log("average no. of energy => thickness", thickness);
      console.log("average no. of instruments => n", n);
      console.log("average length of track => len", len);
      console.log("average no. of sections => scl", scl);
      console.log("r,g,b", r, g, b);
      p.fill(125);
      //p.noLoop();
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
    p.background(bgColor);
    p.fill(125);
    len = len + 0.2;
    p.text(
      `avg no. of bars: ${totalBars},
    avg no. of sections: ${totalSections} 
    avg energy ${parseInt(totalEnergy)} 
    avg instrumentalness: ${parseInt(totalInstrumentalness)} 
    avg duration in ms: ${totalDuration} 
    avg liveness: ${parseInt(totalR)} 
    avg valence: ${parseInt(totalG)} 
    avg acousticness: ${parseInt(totalB)} 
    major or minor: ${parseInt(totalMode) === 1 ? "major" : "minor"}   `,
      100,
      100,
      400,
      height
    );
    p.translate(width / 2, height);
    p.tree(width / 2, height, len, angle, scl, n, thickness, 0);
    //console.log("what's len", len);
    if (len > 600) {
      p.noLoop();
      console.log("stop loop!");
    }
  };

  p.tree = function (x, y, len, angle, scl, n, thickness, startingColor) {
    p.stroke(startingColor, 100, 100);
    p.strokeWeight(thickness);
    p.line(0, 0, 0, -len);
    p.translate(0, -len);
    if (len > 40) {
      newLen = newLen + 0.5;
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
