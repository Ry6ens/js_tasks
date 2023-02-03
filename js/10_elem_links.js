// Дано елементи з класом text.
// Отримайте посилання на всі ці елементи.
// Додайте кожному елементу на кінець назву його тега в нижньому регістрі.

const elements = document.querySelectorAll(".text");
const addName = [...elements].map(
  (el) => (el.textContent = `My tag is ${el.tagName}`)
);
