export default function Sketch5(p) {
  p.disableFriendlyErrors = true;
  let ang = p.PI / 6;
  let h;
  let l;
  let width = 1000;
  let height = 800;
  let tracks = [];
  let tree = 0;
  let day;
  let season;
  let yloc;
  let xloc;
  let selectedTracks = 0;

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
  };

  p.myCustomRedrawAccordingToNewPropsHandler = async function (props) {
    tracks = props.props.tracks;
    selectedTracks = props.props.selectedTracks;
    console.log("array?", props.props);
    console.log("value of selectedTracks", props.props.selectedTracks);
  };

  p.draw = function () {
    console.log(tracks.length, selectedTracks);
    if (tracks.length === selectedTracks) {
      for (let i = 0; i < tracks.length; i++) {
        day = Math.round(tracks[i].features.mode / tracks.length);
        season = Math.round(tracks[i].features.valence / tracks.length);
      }
      p.drawTrees();

      p.noLoop();
    }
  };

  p.drawTrees = function () {
    console.log("day or night", day);
    console.log("spring or autumn", season);
    if (day === 0) {
      p.background(55);
    } else if (day === 1) {
      p.background(206, 232, 240);
    }
    p.push();
    p.translate(0, height * 0.9);
    for (let i = 0; i < tracks.length; i++) {
      l = p.map(tracks[i].features.energy, 0, 1, 50, 200);
      yloc = p.map(tracks[i].features.acousticness, 0, 1, -10, 10);
      xloc = p.map(tracks[i].features.key, 0, 11, -10, 100);
      xloc > width * 0.9
        ? p.translate(-width * 0.85, 0)
        : p.translate(xloc, yloc);
      p.push();
      console.log(i, xloc, yloc);
      p.branch(l);

      p.stroke(255);
      p.strokeWeight(1);
      p.fill(255);
      p.textSize(10);
      //p.translate(0, yloc * -yloc);
      p.line(0, 0, 0, 0);
      //   p.translate(0, -yloc);
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
      let multi = p.random(0.2, 0.7);

      p.branch(l * multi);
      p.pop();
      p.push();
      p.rotate((-ang * 9) / l);
      multi = p.random(0.2, 0.7);

      p.branch(l * multi);
      p.pop();

      //console.log(l);
    }
  };

  //   p.grass = function (h, hh) {
  //     for (let i = 0; i < width; i++) {
  //       let r = p.random(66, 88);
  //       let g = p.random(100, 120);
  //       let b = p.random(27, 40);
  //       p.stroke(r, g, b);
  //       let hei = p.random(h, hh);
  //       p.line(i, height, i, height * hei);
  //     }
  //   };
}
