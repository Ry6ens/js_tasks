// TODO list

// Існує форма з одним інпутом, куди вводиться текст. І є чекбокс.
//    Поки чекбокс не натиснутий, кнопка на формі неактивна.
//    Натисканням Enter в інпуті або натисканням на кнопку Add, в список нижче, додається todo-нотатка.
//    Очистити інпут
//    Прибрати перезавантаження, звертатися через форму (elements) та ім'я інпуту
//    При натисканні на todo-замітку у списку, вона стає виконаною, тобто. текст закреслюється (клас complete)
//    Чекбокс при додаванні нотатки знову має стати не вибраним, а кнопка знову недоступною
//    Додати кнопку Видалити на кожну нотатку (+функціонал видалення)

const submitBtn = document.querySelector("button");
const checkBox = document.querySelector('[name="confirm"]');
const listEl = document.querySelector(".todo-list");
const formEl = document.querySelector("form");

checkBox.addEventListener("change", () => {
  if (checkBox.checked) {
    return submitBtn.removeAttribute("disabled");
  }
  submitBtn.setAttribute("disabled", "");
});

const submitTextToList = (event) => {
  event.preventDefault();
  const submitFormTarget = event.currentTarget;

  // Insert ListItems
  const textInput = submitFormTarget.elements.myTodo.value;
  listEl.insertAdjacentHTML(
    "beforeend",
    `<li >
      <p class="js-item">${textInput}</p>
      <button type="button">Delete</button>
    </li>`
  );

  submitBtn.setAttribute("disabled", "");
  submitFormTarget.reset();
};

// Remove LI item by press BUTTON
listEl.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    event.target.closest("li").remove();
  }
});

// Add.remove class COMPLETE
const toggleItems = (event) => {
  if (!event.target.classList.contains("js-item")) {
    return;
  }
  event.target.classList.toggle("complete");
};

formEl.addEventListener("submit", submitTextToList);
listEl.addEventListener("click", toggleItems);
