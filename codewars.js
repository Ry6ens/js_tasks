function closeCompare(a, b, margin) {
  if (a === b || b < margin < a) {
    return 0;
  } else if (a < b || b < margin < a) {
    return -1;
  } else if (a > b || b < margin < a) {
    return 1;
  }
}
console.log(closeCompare(6, 5));
