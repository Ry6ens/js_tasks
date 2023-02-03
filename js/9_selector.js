// querySelector
// Отримати посилання на кожен елемент р з div.wrapper по черзі, використовуючи різні селектори.
const paragraf = document.querySelector("div.wrapper > p");
const paragrafId = document.querySelector("#first-elem");
const paragrafTitle = document.querySelector("title");

// querySelectorAll
// Отримати посилання на всі елементи 'р' за селектором тега.
// Перебрати їх та вивести в консоль.
const allElem = [...document.querySelectorAll("p")].map(
  (el) => el
  //console.log(el)
);

// getElementById
// Отримати посилання елемент c id "elem".
const getId = document.getElementById("elem");

// classList
// Даний елемент # elem.
// Отримати посилання на нього.
// Додайте йому класи 'blue' та 'bg-red'.
// Видаліть у нього клас bg-red
// Перевірте наявність у нього класу 'blue' та 'bg-red'
const elem = document.querySelector("#elem");
const addClassElem = elem.classList.add("blue", "bg-red");
const removeClassElem = elem.classList.remove("bg-red");
const containsClass = elem.classList.contains("blue", "bg-red");
console.log(containsClass);

// style
// Даний елемент # elem.
// Задайте йому колір кольору tomato
// Додайте йому чорну межу шириною 5рх
elem.style.color = "tomato";
elem.style.border = "5px solid black";
