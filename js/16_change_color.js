// Є сині прямокутники.
// 1) При натисканні на прямокутник він повинен змінювати колір з синього на жовтий, з жовтого на синій (клас block_active).
// 2) При натисканні на прямокутник, він стає жовтим.
//    При цьому якщо є вже жовтий квадрат, то він стає синім.
//    Так можна кликати на будь-який квадрат, він стає жовтим, а старий жовтий квадрат назад синім і тд.
// 3) Внизу таблиці є кнопка "змінити кольори".
//    При її натисканні всі кольори клітин змінюються на протилежні.

const listElem = document.querySelector(".container");
const itemElem = document.querySelectorAll(".js-block");
const changeColorsBtn = document.querySelector(".reverse");
let state = "inactive";

const changeColorElem = (event) => {
  if (event.target.nodeName === "NAV") {
    return;
  } else if (event.target.classList.contains("block_active")) {
    return itemElem.forEach((el) => el.classList.remove("block_active"));
  }
  itemElem.forEach((el) => el.classList.remove("block_active"));
  event.target.classList.add("block_active");
};

const changeColorsAll = (event) => {
  const isactive = state === "active";
  itemElem.forEach((el) => {
    if (!isactive) {
      el.classList.add("block_active");
    } else {
      el.classList.remove("block_active");
    }
  });
  state = isactive ? "inactive" : "active";
};

listElem.addEventListener("click", changeColorElem);
changeColorsBtn.addEventListener("click", changeColorsAll);
