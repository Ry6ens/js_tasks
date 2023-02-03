// Потрібно створити галерею з 16ти ел-ів розміром 4х4, динамічно
// додавши в ul.list ел-ти li.item з контентом "...".
// По кліку на елемент галареї потрібно перезаписати його контент значенням
// порядкового номера цього елемента.

let arrayElem = new Array(16).fill(null);

const ulElem = document.querySelector(".js-list");
const liElem = document.querySelector(".item");

// 1) Вариант
// function createGalleryElem() {
//   let arr = [];
//   for (let i = 0; i < arrayElem.length; i++) {
//     arr.push(`<li class="item" data-index-number="${i + 1}">...</li>`);
//   }
//   return arr.join("");
// }

// ulElem.insertAdjacentHTML("afterbegin", createGalleryElem());

// const changeTextEl = (element) => {
//   event.target.textContent = event.target.dataset.indexNumber;
// };

// ulElem.addEventListener("click", changeTextEl);
//
// 2) Вариант
const createGalleryElem = (el, idx) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = "...";
  li.dataset.index = idx + 1;
  return li;
};
const newArray = arrayElem.map(createGalleryElem);

ulElem.append(...newArray);

const changeTextEl = (event) => {
  if (event.target.tagName !== "LI") {
    return;
  }
  event.target.textContent = event.target.dataset.index;
};
ulElem.addEventListener("click", changeTextEl);
