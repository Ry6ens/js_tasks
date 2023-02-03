// Написать функцию, которая возвращает
// массив только с уникальными значениями
// [1,1,2,2,3,4,5,5] -> [3,4]

const numbers = [1, 1, 2, 2, 3, 4, 5, 5];

function withoutRepeat(numbers) {
  //1) Решение
  //   const result = [];
  //   for (let i = 0; i < numbers.length; i++) {
  //     let count = 0;
  //     for (let j = 0; j < numbers.length; j++) {
  //       if (numbers[i] === numbers[j]) {
  //         count++;
  //       }
  //     }
  //     if (count === 1) {
  //       result.push(numbers[i]);
  //     }
  //   }
  //   return result;
  //2) Решение
  const result = [];
  const dictionary = {};
  for (let i = 0; i < numbers.length; i++) {
    const item = numbers[i];
    dictionary[item] = dictionary[item] ? dictionary[item] + 1 : 1;
  }
  for (let j = 0; j < numbers.length; j++) {
    if (dictionary[j] === 1) {
      result.push(j);
    }
  }
  return result;
}

console.log(withoutRepeat(numbers));
