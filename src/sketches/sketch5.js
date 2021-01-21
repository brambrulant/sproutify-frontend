export default function Sketch5(p) {
  p.disableFriendlyErrors = true;
  let ang = p.PI / 6;
  let h;
  let l;
  let width = 1400;
  let height = 800;
  let tracks = [];
  let tree = 0;
  let day;
  let season;
  let yloc;
  let xloc;
  let selectedTracks = 0;
  let stars = 0;
  let flicker = 1;

  p.setup = function () {
    p.createCanvas(width, height);

    p.fill(77, 111, 33);
    p.noStroke();
    p.push();
    p.background(125);
    p.textSize(32);
    p.fill(255);
    p.text("generating forest!", width / 2, height / 2, 400, 400);
    p.pop();
    //  rect(0, height*.8, width, height);
    //p.grass(0.78, 0.8);
    p.noLoop();
  };

  p.myCustomRedrawAccordingToNewPropsHandler = async function (props) {
    tracks = props.props.tracks;
    selectedTracks = props.props.selectedTracks;
    console.log("array?", props.props);
    console.log("value of selectedTracks", props.props.selectedTracks);
    if (tracks.length === selectedTracks) {
      for (let i = 0; i < tracks.length; i++) {
        //calculate averages to determine season or day
        day = Math.round(tracks[i].features.mode / tracks.length);
        season = Math.round(tracks[i].features.valence / tracks.length);
        stars = stars + tracks[i].analysis.sections.length;
      }
      p.landscape();
      p.drawTrees();
    }
  };

  p.draw = function () {
    console.log(tracks.length, selectedTracks);
  };

  p.landscape = function () {
    console.log("day or night", day);
    console.log("spring or autumn", season);
    if (day === 0) {
      // darkness and stars: it's nighttime
      p.background(75);
      for (let i = 0; i < height; i++) {
        p.stroke(p.map(i, 0, height, 0, 100));
        p.line(0, i, width, i);
      }
      p.stars(stars, flicker);
      p.hills(10, 25, 25, 25, 0);
      console.log("how many sections/stars?", stars);
    } else if (day === 1) {
      // brightness and the sun: it's daytime
      p.background(184, 174, 118);
      for (let i = 0; i < height; i++) {
        p.stroke(
          p.map(i, 0, height, 255, 100),
          p.map(i, 0, height, 150, 100),
          p.map(i, 0, height, 100, 50)
        );
        p.line(0, i, width, i);
      }
      p.hills(10, 184, 174, 118, 100);
      p.fill(246, 134, 86);
      p.noStroke();
      p.circle(p.random(80, width - 80), 90, 80);
    }
  };

  p.drawTrees = function () {
    p.push();
    p.translate(width / 2, height);
    for (let i = 0; i < tracks.length; i++) {
      l = p.map(tracks[i].features.energy, 0, 1, 20, 180);
      yloc = p.map(tracks[i].features.acousticness, 0, 1, -100, 0);
      xloc = p.map(
        tracks[i].features.danceability,
        0,
        1,
        -width / 1.5,
        width / 1.5
      );
      p.push();
      p.translate(xloc, yloc);

      console.log(i, xloc, yloc);
      p.branch(l);

      p.stroke(255);
      p.strokeWeight(1);
      p.fill(255);
      p.textSize(10);
      //p.translate(0, yloc * -yloc);
      p.line(0, 0, 0, 0);
      p.translate(0, -p.map(tracks[i].features.acousticness, 0, 1, -100, 0));
      p.text(i + 1, 0, 0, 100, 100);
      p.pop();
      tree = tree + 1;
    }
    p.pop();

    console.log("looping?");
  };

  p.branch = function (l) {
    // color of branches depending on the season
    if (season === 0) {
      p.stroke(40, 30, 10);
    } else if (season === 1) {
      p.stroke(60, 50, 30);
    }
    // color of leaves depending on the season
    if (l < 10) {
      if (season === 0) {
        p.stroke(p.random(155, 200), p.random(50, 140), 0);
      } else if (season === 1) {
        p.stroke(p.random(30, 100), p.random(120, 150), p.random(30, 100)); //(111, 153, 64)
      }
    }
    p.strokeWeight(l / 14);
    ang = p.PI / p.random(1, 3);
    p.line(0, 0, 0, -l);
    p.translate(0, -l);
    if (l > 1) {
      p.push();
      p.rotate((ang * 9) / l);
      let multi = p.random(0.4, 0.9);

      p.branch(l * multi);
      p.pop();
      p.push();
      p.rotate((-ang * 9) / l);
      multi = p.random(0.4, 0.9);

      p.branch(l * multi);
      p.pop();

      //console.log(l);
    }
  };

  p.hills = function (n, r, g, b, stroke) {
    console.log("rgb?", r, g, b);
    for (let i = 0; i < n; i++) {
      p.fill(r, g, b);
      p.stroke(stroke);
      p.arc(
        p.random(0, width),
        height,
        p.random(width / 1.5, width),
        p.random(100, 300),
        0,
        80,
        p.PI,
        p.CHORD
      );
    }
  };
  p.stars = function (n, off) {
    for (let i = 0; i < n; i++) {
      p.strokeWeight(p.random(1, 3));
      let noise = p.map(p.noise(off), 0, 1, 0, 255);
      console.log("is this noise?", noise);
      p.stroke(255, noise);
      p.point(p.random(0, width), p.random(0, height / 2));
    }
  };
}
