// Даний ol. Вставте нову li з текстом 'Soft Skills' в кінець списку.
// Вставте перед списком заголовок із текстом 'Plan:'.

//add Item
const getList = document.querySelector("ol");
const createItem = document.createElement("li");
createItem.textContent = "Soft Skills";
const addItem = getList.append(createItem);

//add Title
const createTitle = document.createElement("h2");
createTitle.textContent = "Plan";
const addTitle = getList.before(createTitle);
