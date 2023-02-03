const randomPoint = [];
const selfPoint = [0, 0, 0];

//Generate random number from 0 to 100
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//Add number to randomPoint
for (let i = 0; i < 3; i++) {
  randomPoint.push(getRandomNumber(0, 100));
}

//Calculate distance between two points
function calculateDistance(random, selfPoint) {
  const distance = Math.pow(
    Math.pow(random[0] - selfPoint[0], 2) +
      Math.pow(random[1] - selfPoint[1], 2) +
      Math.pow(random[2] - selfPoint[2], 2) * 1.0,
    0.5
  );

  return distance;
}

console.log(calculateDistance(randomPoint, selfPoint));
