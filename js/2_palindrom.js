// aabbaa - true
// aaBab - false
// aZaZA - true

const palindrom = (word) => {
  //1) Решение
  word = word.toLowerCase();
  return word === word.toLowerCase().split("").reverse().join("");

  //2) Решение
  let string = word.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }
  }
  return true;
};

console.log(palindrom("aabbaa"));
