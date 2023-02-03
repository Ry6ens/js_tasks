// 1. В списку елементів розмітки потрібно змінити значення контенту з Item на Пункт.
// 2. Тексту кожного елементу списка потрібно змінити колір на рандомний.
// 3. Виведіть під списком повідомлення з інформацією про к-сть елементів списку.

const galleryList = document.querySelector(".js-gallery");
const galleryItem = document.querySelectorAll("ul.js-gallery li");

const changeItemName = [...galleryItem].map(
  (el) => (el.textContent = "Пункт-1")
);

for (let p of galleryItem) {
  console.log(p);
  p.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const messageAmout = document.createElement("p");
messageAmout.textContent = `К-сть елементів списку: ${changeItemName.length}`;
galleryList.after(messageAmout);
