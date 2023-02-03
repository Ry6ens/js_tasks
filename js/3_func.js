// Напиши функцию которая будет считать следующее выражение:

// function one() {}
// function two() {}
// function three() {}
// function four() {}
// function five() {}
// function six() {}

// function plus() {}
// function minus() {}
// function divide() {}
// function mult() {}

//one(plus(three())); //4
//one(mult(three())); //3
//two(mult(four()))); //8

/* =============================================================================================================================== */

function one(callback) {
  return callback ? callback(1) : 1;
}
function two(callback) {
  return callback ? callback(2) : 2;
}
function three(callback) {
  return callback ? callback(3) : 3;
}
function four(callback) {
  return callback ? callback(4) : 4;
}
function five(callback) {
  return callback ? callback(5) : 5;
}
function six(callback) {
  return callback ? callback(6) : 6;
}

function plus(a) {
  return (b) => a + b;
}
function minus(a) {
  return (b) => a - b;
}
function divide(a) {
  return (b) => b / a;
}
function mult(a) {
  return (b) => b * a;
}

one(plus(three())); //4
one(mult(three())); //3

console.log(two(mult(four())));
