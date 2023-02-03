//Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
// 1, 1, 2, 3, 5, 8, 13, 21, 34
// f(n) = f(n-1) + f(n-2)

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
