const canvas = document.getElementById("drawContainer");
const ctx = canvas.getContext("2d");

let startPosition = { x: 0, y: 0 };
let endPosition = { x: 0, y: 0 };
let isDrawing = false;
let existingLines = [];
let existingDots = [{ x: 50, y: 80 }];

const getCoordinates = (e) => {
  let rect = canvas.getBoundingClientRect();

  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;

  return {
    x,
    y,
  };
};

const mouseClick = (e) => {
  if (isDrawing) {
    existingLines.push({ startPosition, endPosition });
    // calculateIntersection(p1, p2, p3, p4);
    console.log(existingLines);

    isDrawing = false;
    return;
  }
  const { x, y } = getCoordinates(e);
  startPosition = { x, y };

  isDrawing = true;
};

const mouseMoveListener = (e) => {
  if (isDrawing) {
    const { x, y } = getCoordinates(e);
    endPosition = { x, y };
    drawLine();
  }
  return;
};

const drawLine = (e) => {
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, 500, 500);

  ctx.beginPath();
  drawDotsArray();
  drawLinesArray();

  ctx.moveTo(startPosition.x, startPosition.y);
  ctx.lineTo(endPosition.x, endPosition.y);

  ctx.stroke();
};

const drawLinesArray = () => {
  for (let i = 0; i < existingLines.length; i++) {
    const { startPosition, endPosition } = existingLines[i];
    ctx.moveTo(startPosition.x, startPosition.y);
    ctx.lineTo(endPosition.x, endPosition.y);
  }
};

const drawDotsArray = () => {
  for (let i = 0; i < existingDots.length; i++) {
    const { x, y } = existingDots[i];
    const pointX = Math.round(x);
    const pointY = Math.round(y);

    ctx.arc(pointX, pointY, 4, 0, 2 * Math.PI);
  }

  return;
  //   console.log("object");
  //   const pointX = Math.round(x);
  //   const pointY = Math.round(y);

  //   ctx.beginPath();
  //   ctx.arc(pointX, pointY, 4, 0 * Math.PI, 2 * Math.PI);
  //   ctx.fill();
};

const mouseRightClick = (e) => {
  isDrawing = false;
};

const calculateIntersection = (p1, p2, p3, p4) => {
  existingLines.map(() => {});

  var c2x = p3.x - p4.x; // (x3 - x4)
  var c3x = p1.x - p2.x; // (x1 - x2)
  var c2y = p3.y - p4.y; // (y3 - y4)
  var c3y = p1.y - p2.y; // (y1 - y2)

  // down part of intersection point formula
  var d = c3x * c2y - c3y * c2x;

  if (d == 0) {
    throw new Error("Number of intersection points is zero or infinity.");
  }

  // upper part of intersection point formula
  var u1 = p1.x * p2.y - p1.y * p2.x; // (x1 * y2 - y1 * x2)
  var u4 = p3.x * p4.y - p3.y * p4.x; // (x3 * y4 - y3 * x4)

  // intersection point formula

  var px = (u1 * c2x - c3x * u4) / d;
  var py = (u1 * c2y - c3y * u4) / d;

  var p = { x: px, y: py };
  console.log(p);

  return p;
};

canvas.addEventListener("click", mouseClick);
canvas.addEventListener("mousemove", mouseMoveListener);
canvas.addEventListener("contextmenu", mouseRightClick);
