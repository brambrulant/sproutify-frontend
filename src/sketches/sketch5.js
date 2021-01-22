export default function Sketch5(p) {
  p.disableFriendlyErrors = true;
  let ang;
  let l;
  const width = window.screen.width;
  const height = 800;
  let tracks = [];
  let tree = 0;
  let totalMode = 0;
  let day;
  let totalValence = 0;
  let season;
  let yloc;
  let xloc;
  let selectedTracks = 0;
  let stars = 0;
  let flicker = 1;

  p.setup = function () {
    p.createCanvas(width, height);
    p.frameRate(80);
    p.fill(77, 111, 33);
    p.noStroke();
    p.background(240, 232, 221);
    // p.textSize(32);
    // p.fill(255);
    // p.text("generating forest!", width / 2, height / 2, 400, 400);
    // p.pop();
    //  rect(0, height*.8, width, height);
    //p.grass(0.78, 0.8);
    //p.noLoop();
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    tracks = props.props.tracks;
    selectedTracks = props.props.selectedTracks;
    // console.log("array?", props.props);
    // console.log("value of selectedTracks", props.props.selectedTracks);
  };

  p.draw = function () {
    //console.log("draaaaw!", tracks.length, selectedTracks);
    if (tracks.length === selectedTracks) {
      for (let i = 0; i < tracks.length; i++) {
        //calculate averages to determine season or day
        totalMode += tracks[i].features.mode;
        totalValence += tracks[i].features.valence;
        stars = stars + tracks[i].analysis.sections.length;
        day = Math.round(totalMode / tracks.length);
        season = Math.round(totalValence / tracks.length);
      }

      p.landscape();
      p.drawTrees();
    }
  };

  p.landscape = function () {
    //console.log("day or night", day);
    //console.log("spring or autumn", season);
    if (day === 0) {
      // darkness and stars: it's nighttime
      p.background(75);
      for (let i = 0; i < height; i++) {
        p.stroke(p.map(i, 0, height, 0, 100));
        p.line(0, i, width, i);
      }
      p.stars(stars, flicker);
      p.mountains(25, 25, 25);
      // console.log("how many sections/stars?", stars);
    } else if (day === 1) {
      // brightness and the sun: it's daytime
      p.background(75);
      for (let i = 0; i < height; i++) {
        p.stroke(
          p.map(i, 0, height, 255, 100),
          p.map(i, 0, height, 150, 100),
          p.map(i, 0, height, 100, 50)
        );
        p.line(0, i, width, i);
      }
      p.stars(stars, flicker);
      p.mountains(45, 45, 45);
      p.fill(246, 134, 86);
      p.noStroke();
      p.circle(p.random(80, width - 80), 90, 80);
    }
  };

  p.drawTrees = function () {
    p.push();
    p.translate(0, height);
    for (let i = 0; i < tracks.length; i++) {
      l = p.map(tracks[i].features.energy, 0, 1, 20, 180);
      yloc = p.map(tracks[i].features.acousticness, 0, 1, -200, 0);
      xloc = p.map(tracks[i].features.instrumentalness, 0, 1, 100, width - 100);

      //   angChange = p.PI / p.map(tracks[i].features.danceability, 0, 1, 1, 5);
      //   rotation = tracks[i].features.tempo;
      p.push();
      p.translate(xloc, yloc);

      //   console.log(i, xloc, yloc);
      p.branch(l);

      p.stroke(255);
      p.strokeWeight(1);
      p.fill(255);
      p.textSize(10);
      p.translate(
        0,
        -p.map(tracks[i].features.acousticness * 2, 0, 1, -100, 0)
      );
      p.text(i + 1, 0, 0, 100, 100);
      p.pop();
      tree = tree + 1;
    }
    p.pop();

    // console.log("looping?");
  };

  p.branch = function (l, danceability) {
    // color of branches depending on the season
    if (season === 0) {
      p.stroke(20, 10, 0);
    } else if (season === 1) {
      p.stroke(60, 50, 30);
    }
    // color of leaves depending on the season
    if (l < 10) {
      if (season === 0) {
        p.stroke(p.random(155, 200), p.random(50, 140), 0);
      } else if (season === 1) {
        p.stroke(p.random(189, 229), p.random(201, 241), p.random(127, 167)); //(209,221,147)
      }
    }
    if (l < 1) {
      p.noLoop();
    }
    p.strokeWeight(l / 14);
    ang = p.PI / p.random(1, 3);
    p.line(0, 0, 0, -l);
    p.translate(0, -l);
    if (l > 1) {
      p.push();
      p.rotate((ang * 9) / l);
      //   console.log("what's danceability?", danceability);
      //   console.log("what's this?", (ang * 9) / danceability);
      let multi = p.random(0.4, 0.9);

      p.branch(l * multi);
      p.pop();

      p.push();
      p.rotate((-ang * 9) / l);
      multi = p.random(0.4, 0.9);
      p.branch(l * multi);
      p.pop();
    }
  };

  p.stars = function (n, off) {
    for (let i = 0; i < n; i++) {
      p.strokeWeight(p.random(1, 3));
      let noise = p.map(p.noise(off), 0, 1, 0, 255);
      //   console.log("is this noise?", noise);
      p.stroke(255, noise);
      p.point(p.random(0, width), p.random(0, height / 2));
    }
  };
  p.birds = function (n, off) {
    for (let i = 0; i < n; i++) {
      p.strokeWeight(p.random(1, 3));
      let noise = p.map(p.noise(off), 0, 1, 0, 255);
      //   console.log("is this noise?", noise);
      p.push();
      p.stroke(0, noise);
      p.point(p.random(0, width), p.random(0, height / 2));
      p.pop();
    }
  };
  p.mountains = function (r, g, b) {
    p.noStroke();
    p.fill(r, g, b);
    p.beginShape();
    let yoff = 0;
    let xoff = 0;

    for (let x = 0; x <= width; x += 20) {
      let mountainY = p.map(p.noise(xoff, yoff), 0, 1, height - 450, height);
      p.vertex(x, mountainY);
      xoff += 0.05;
    }
    yoff += 0.01;
    p.vertex(width, height);
    p.vertex(0, height);
    p.endShape(p.CLOSE);
  };
}
