export default function sketch(p, props) {
  const width = 800; // declare width of canvas
  const height = 550; // declare height of canvas
  var angle;
  var axiom = "F";
  var sentence = axiom;
  var len = 150;

  var rules = [];
  rules[0] = {
    a: "F",
    b: "F[+F]F[-FF]",
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    console.log(props.rerender.props, "props in sketch?");

    if (props.rerender.props) {
      p.draw();
      console.log(sentence.length);
    }
  };

  p.draw = function () {
    if (sentence.length > 20000) {
      p.noLoop();
    }
    len *= 0.5;
    var nextSentence = "";
    for (var i = 0; i < sentence.length; i++) {
      var current = sentence.charAt(i);
      var found = false;
      for (var j = 0; j < rules.length; j++) {
        if (current === rules[j].a) {
          found = true;
          nextSentence += rules[j].b;
          break;
        }
      }
      if (!found) {
        nextSentence += current;
      }
    }
    sentence = nextSentence;
    let color = p.random() * 200;
    // p.createP(sentence);
    p.turtle(color);
  };

  p.turtle = function (color) {
    p.background(240, 232, 221);
    p.resetMatrix();
    p.translate(width / 2, height);

    for (var i = 0; i < sentence.length; i++) {
      var current = sentence.charAt(i);

      if (current === "F") {
        p.line(0, 0, 0, -len);
        p.translate(0, -len);
      } else if (current === "+") {
        p.stroke(color, 76, color);
        p.rotate(angle);
      } else if (current === "-") {
        p.stroke(57, 76, 122);
        p.rotate(-angle);
      } else if (current === "[") {
        p.stroke(color, 76, 122);
        p.push();
      } else if (current === "]") {
        p.stroke(57, color, color);
        p.pop();
      }
    }
  };
  p.setup = function (props) {
    // p.noLoop();
    p.frameRate(1);
    p.createCanvas(width, height);
    angle = p.radians(40);
    p.background(240, 232, 221);
    // p.createP(axiom);
    p.turtle();
    //console.log("hello?", props.rerender.props);
    // button.mousePressed(p.generate);
  };
}
