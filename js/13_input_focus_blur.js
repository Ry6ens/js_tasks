// Інпут (input, focus, blur)

// Зробіть так, щоб
//  - при фокусі на інпут його кордон ставав жовтим (клас .active)
//  - при введенні в інпут введений текст потрапляв до абзацу під інпутом
//  - при втраті фокусу перевіряємо текст в інпуті, і якщо він порожній, фарбуємо кордон у червоний колір (клас .error),
//  а якщо ні - просто забираємо жовту рамку.

const inputBtn = document.querySelector("input");
const textInput = document.querySelector(".text");

inputBtn.addEventListener("focus", (event) => {
  if (event.currentTarget.value === "") {
    inputBtn.classList.add("error");
  }
  inputBtn.classList.replace("error", "active");
});

inputBtn.addEventListener("blur", (event) => {
  if (event.currentTarget.value === "") {
    return inputBtn.classList.replace("active", "error");
  }
  inputBtn.classList.remove("error");
});

inputBtn.addEventListener("input", (event) => {
  textInput.textContent = event.target.value;
});
