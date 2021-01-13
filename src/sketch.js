export default function sketch(p) {
  const width = 800; // declare width of canvas
  const height = 1000; // declare height of canvas
  let songLength;
  let playlistLength;
  let rerender;
  const t = 4;
  const r = Math.random() * 255; // rgb for color differantiation + o for opacity
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  const o = 255;

  p.setup = function () {
    p.noLoop();
    p.createCanvas(width, height);
    p.frameRate(60);
    p.smooth();
    p.angleMode(p.DEGREES);
    p.stroke(255);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rerender) {
      rerender = rerender + props.rerender;
      p.redraw();
    } else {
      //
    }
    if (props.playlist.playlist.length < 1) {
      console.log("no playlist yet");
    } else {
      console.log("playlist length");
      playlistLength = props.playlist.playlist.tracks.items.length + 900;
      // height = props.playlist.playlist.tracks.items.length + 900;
    }
  };

  p.draw = function () {
    console.log("songlenght", songLength);

    // thickness of first line

    const n = Math.random() * 5; // number of lines
    const randomAngle = Math.random() * 30;
    let nextLine = Math.random();

    p.background(240, 232, 221);
    p.translate(width / 2, height);
    console.log("playlistlength sketch", playlistLength);
    let length = p.map(playlistLength, 0, 1000, 30, 500);
    if (length > songLength * 10) {
      p.noLoop();
    } else if (length < songLength) {
      p.loop();
    }
    const angle = p.map(randomAngle, 0, 1, 0, 180);
    if (nextLine > 0.5) {
      nextLine = 0.5;
    } else if (nextLine < 0.4) {
      nextLine = 0.4;
    }
    tree(width / 2, height, length, angle, nextLine, n, r, g, b, t, o);
    // console.log("whats n", n);
    function tree(
      x, // x position first line
      y, // y position first line
      length, // length of line
      angle, // angle at division
      nxtLine, // length of next line
      n, // number of lines
      red,
      green,
      blue,
      thickness,
      opacity
    ) {
      p.stroke(57, 76, 124);
      p.strokeWeight(thickness);
      p.line(0, 0, 0, -length);
      p.translate(0, -length);
      thickness = thickness / 2;

      //console.log(r, g, b);
      if (length > 10 && length < 1000) {
        for (let i = 0; i < n; i++) {
          console.log(n);
          p.push();
          p.rotate(-angle + (2 * angle * i) / (n - 0.3));
          tree(
            0,
            0,
            length * nxtLine,
            angle + 10,
            nxtLine,
            n,
            r + 30,
            g + 50,
            b - 20,
            thickness,
            opacity - 20
          );
          p.pop();
        }
      }
    }
  };
}
