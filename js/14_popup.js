// Popup

// Даний простий прихований popup з класом popup.
// При натисканні на кнопку показати popup (клас popup_open).
// При натисканні ESC приховати.
// Слухач ESC не повинен постійно висіти на window, а кнопка та слухач кліка повинні не діяти при відкритій модалці.
// Перевірити це в тілі функції-обробника.

const openPopupBtn = document.querySelector(".open-popup-btn");
const popupWind = document.querySelector(".popup");

openPopupBtn.addEventListener("click", (event) => {
  popupWind.classList.add("popup_open");
  openPopupBtn.setAttribute("disable", "");
  window.addEventListener("keydown", onEscBtn);
  popupWind.addEventListener("click", onClick);
});

const closePopupWindow = (event) => {
  popupWind.classList.remove("popup_open");
  openPopupBtn.removeAttribute("disable");
  window.removeEventListener("keydown", onEscBtn);
  popupWind.removeEventListener("click", onClick);
};

const onEscBtn = (event) => {
  if (event.code !== "Escape") {
    return;
  }
  closePopupWindow();
};

const onClick = (event) => {
  console.log(event.currentTarget);
  console.log(event.target);
  if (event.currentTarget.classList.contains("popup_open")) {
    closePopupWindow();
  }
};
