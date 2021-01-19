export default function sketch4(p) {
  const width = 1400; // declare width of canvas
  const height = 800; // declare height of canvas
  let angle;

  p.setup = function (props) {
    p.createCanvas(width, height);
    //p.background(240, 232, 221);
    p.stroke(255);
    p.background(240, 232, 221);
    // angle = p.random() * 180;
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (tracks) {
    if (tracks.tracks.length === 50) {
      console.log(tracks.tracks);
      let total = 0;
      for (let i = 0; i < tracks.tracks.length; i++) {
        total += tracks.tracks[i].analysis.bars.length;
      }
      angle = total / tracks.tracks.length;
      console.log("average", angle);
      p.tree(width / 2, height, 300, angle, 0.5, 3, 0);
      p.noLoop();
    } else {
    }
  };

  p.draw = function () {
    p.translate(width / 2, height);
    p.fill(255);
  };

  p.tree = function (x, y, len, angle, scl, n, startingColor) {
    p.stroke(startingColor, 100, 100);
    p.line(0, 0, 0, -len);
    p.translate(0, -len);
    if (len > 1) {
      for (let i = 0; i < n; i++) {
        p.push();
        p.rotate(-angle + (2 * angle * i) / (n - 1));
        p.tree(0, 0, len * scl, angle, scl, n, startingColor + 20);
        p.pop();
      }
    }
  };
}
