"use strick";

// Написати ф-ю capitalize, яка буде приймати строку і буде вертати нову строку де кожне слово буде починатися
// з великої літери.
// capitalize('the quick brown fox') // 'The Quick Brown Fox'
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt

// function capitalize(string) {
//   let newArray = string.split(" ");

//   let secondArray = [];

//   for (let i = 0; i < newArray.length; i += 1) {
//     let newElement = newArray[i].charAt(0).toUpperCase() + newArray[i].slice(1);
//     secondArray.push(newElement);
//   }
//   return secondArray.join(" ");
// }

// console.log(capitalize("the quick brown fox"));

/* ================================================================================ */
// Написати функцію median, яка приймає масив і знаходить його медіану.
// Медіана - це центральна статистика положення, яка розділяє розподіл на дві частини, тобто вона залишає таку ж
// кількість значень на одній стороні, як і на іншій.
// У масиві з непарним числом елементів медіана це число всередині масиву.
// Для масиву з парним числом елементів, де немає жодного елемента точно посередині,
// медіана – це середнє значення двох чисел, що знаходяться всередині масиву.
// У цій задачі заданий непустий масив натуральних чисел. Вам потрібно знайти медіану цього масиву.

// median([1, 2, 3, 4, 5]); // 3
// median([3, 6, 10, 15, 20, 99]); // 12.5

// function median(array) {
//   if (array.length % 2 === 0) {
//     return (array[array.length / 2] + array[array.length / 2 - 1]) / 2;
//   } else {
//     return array[Math.floor(array.length / 2)];
//   }
// }

// console.log(median([3, 6, 10, 15, 20, 99])); // 12.5

/* ================================================================================ */
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників та повертає ім'я самого
// продуктивного (який виконав найбільше завдань). Співробітники і кількість виконаних завдань містяться як властивості
// об'єкта у форматі "ім'я": "кількість задач".
// console.log(findBestEmployee({ann: 29, david: 35, helen: 1, lorence: 99,})); // lorence
// console.log(findBestEmployee({poly: 12, mango: 17, ajax: 4,})); // mango
// console.log(findBestEmployee({lux: 147, david: 21, kiwi: 19, chelsy: 38,})); // lux

// function findBestEmployee(employees) {
//   const values = Object.keys(employees);

//   let name = values[0];
//   let tasks = employees[values[0]];

//   for (let i = 1; i < values.length; i += 1) {
//     if (tasks < employees[values[i]]) {
//       tasks = employees[values[i]];
//       name = values[i];
//     }
//   }
//   return `${name}: ${tasks}`;
// }

/* ================================================================================ */
// Маємо масив користувачів
// const users = [
//   {
//     first_name: "Peterus",
//     last_name: "Verlander",
//     email: "pverlander0@bloomberg.com",
//     gender: "male",
//   },
//   {
//     first_name: "Charis",
//     last_name: "Tennant",
//     email: "ctennant1@t-online.de",
//     gender: "female",
//   },
//   {
//     first_name: "Hortense",
//     last_name: "Lammerding",
//     email: "hlammerding2@blog.com",
//     gender: "female",
//   },
//   {
//     first_name: "Anatollo",
//     last_name: "Ricards",
//     email: "aricards3@washington.edu",
//     gender: "male",
//   },
// ];

// 1) Написати функцію getEmailsByGender(users, gender), яка отримуватиме масив користувачів та стать, і повертатиме масив
// імейлів усіх користувачів даної статі.
//const femaleEmails = getEmailsByGender(users, "female");

// const getEmailsByGender = (users, gender) => {
//   return [...users].filter((el) => el.gender === gender).map((el) => el.email);
// };

//console.table(getEmailsByGender(users, "female")); // ['ctennant1@t-online.de', 'hlammerding2@blog.com']

// 2) Написати функцію addNewUser(users, newUser), яка отримуватиме масив користувачів та об'єкт з новим користувачем.
// Функція повинна додати об'єкт у масив та повернути новий масив. Але якщо користувач з даним імейлом вже існує,
// додаватися не повинно. В такому випадку можна вивести в консоль повідомлення:
// `User with email "${email}" already exists` і повернути масив без змін.

// const newUser = {
//   first_name: "Oralie",
//   last_name: "Langshaw",
//   email: "olangshaw4@google.pl",
//   gender: "female",
// };

// const addNewUser = (users, newUser) => {
//   let newArray = users.map((el) => el.email);
//   if (!newArray.includes(newUser.email)) {
//     return users.push(newUser);
//   }
//   return `User with email "${newUser.email}" already exists`;

//   let newArray = users.some((el) => el.email === newUser.email);
//   if (!newArray) {
//     return users.push(newUser);
//   }
//   return `User with email "${newUser.email}" already exists`;
// };

// console.log(addNewUser(users, newUser)); // 5 users

// const newUser2 = {
//   first_name: "Oralie",
//   last_name: "Langshaw",
//   email: "ctennant1@t-online.de",
//   gender: "female",
// };
// const addNewUser2 = (users, newUser2) => {
//   let newArray = users.some((el) => el.email === newUser2.email);
//   if (!newArray) {
//     return users.push(newUser);
//   }
//   return `User with email "${newUser2.email}" already exists`;
// };
//console.log(addNewUser2(users, newUser2)); // User with email "ctennant1@t-online.de" already exists

// 3) Написати функцію deleteUser(users, userEmail), яка отримуватиме масив користувачів та email користувача, якого
// потрібно видалити. Функція повинна виконати видалення та повернути новий масив. Але якщо користувача з даним імейлом не
//  існує, потрібно вивести в консоль повідомлення:  `There is no user with email "${email}"` і повернути масив без змін.

// const deleteUser = (users, userEmail) => {
//   let isUserExist = users.some((el) => el.email === userEmail);
//   //console.table(newArray);
//   if (isUserExist) {
//     return users.filter((el) => el.email !== userEmail);
//   }
//   console.log(`There is no user with email "${userEmail}"`);
//   return users;
// };

//console.table(deleteUser(users, "pverlander0@bloomberg.com")); // 3 users

//const updatedUsers2 = deleteUser(users, "pverlander0@bloomberg.com");
//console.log(updatedUsers2); // There is no user with email "pverlander0@bloomberg.com"

// 4) Написати функцію editUser(users, userEmail, newName), яка отримуватиме масив користувачів, email користувача, ім'я
// якого потрібно змінити та нове ім'я. Функція повинна змінити та повернути новий масив. Але якщо користувача з даним
// імейлом не існує, потрібно вивести в консоль повідомлення: `There is no user with email "${email}"` і повернути масив
// без змін.

// const editUser = (users, userEmail, newName) => {
//   Решени №1
//   let newArray = users.map((el) => ({ ...el }));
//   console.log(newArray);
//   //debugger;
//   for (const el of newArray) {
//     if (el.email === userEmail) {
//       el.first_name = newName;
//       return newArray;
//     }
//   }
//   return newArray;

//   Решени №2
//   const newArray = [...users];
//   const neededUserIndex = newArray.findIndex((el) => {
//     return el.email === userEmail;
//   });
//   if (neededUserIndex === -1) {
//     return newArray;
//   }
//   newArray[neededUserIndex] = {
//     ...newArray[neededUserIndex],
//     first_name: newName,
//   };
//   return newArray;
// };

//const updatedUsers = editUser(users, "aricards3@washington.edu", "Anatoliy");
//console.table(updatedUsers); // last user has name Anatoliy

//const updatedUsers2 = editUser(users, "fakeEmail", "Marlene");
//console.table(updatedUsers2); // There is no user with email "fakeEmail"

/* ================================================================================ */
//Напишіть функцію leaveUnique(arr), яка повертає масив, що містить лише унікальні елементи arr (Вирішити через reduce)

// const notUniqueNumbers = [1, 2, 3, 1, 3, 2, 4, 5, 4, 7, 5];

// const get = (notUniqueNumbers) =>
//   notUniqueNumbers.reduce((acc, el) => {
//     if (!acc.includes(el)) {
//       acc.push(el);
//     }
//     return acc;
//   }, []);

// const numbers = get(notUniqueNumbers);
// console.log(numbers);

/* ================================================================================ */
// const boss = {
//   name: "Boss",
//   age: 22,
//   sayHello: function () {
//     console.group(`${this.name} info:`);
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.groupEnd();
//   },
// };

// const lena = {
//   name: "Lena",
//   age: 30,
// };

// const persons = Object.create(boss);
// Object.prototype.lena = lena;

// Object.prototype.sayHello = function () {
//   console.log("Hello");
// };

// const str = new String("I am robot");

// function hello() {
//   console.log("Hello", this);
// }

// boss.sayHello.bind(lena)();

// const array = [1, 2, 3, 4, 5];

// Array.prototype.multby = function (n) {
//   return this.map((el) => el * n);
// };

// console.log(array.multby(2));
// console.log(newArray.multby(2));

/* ================================================================================ */
// Користувач
// Напиши клас User для створення користувача з наступними властивостями:
// name - ім'я, рядок
// age - вік, число
// postsCount - кількість постів, число

// Клас очікує один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який повертає рядок:
//     User ${ім'я} is ${вік} years old and has ${у постів} posts.

// class User {
//   constructor({ name, age, postsCount } = {}) {
//     this.name = name;
//     this.age = age;
//     this.postsCount = postsCount;
//   }

//   getInfo() {
//     return `User ${this.name} is ${this.age} years old and has ${this.postsCount} posts`;
//   }
// }

// const mangoData = {
//   name: "Mango",
//   age: 45,
//   postsCount: 20,
// };

// const mango = new User(mangoData);

// console.log(mango);
// console.log(mango.getInfo()); // User Mango is 45 years old and has 20 posts

/* ================================================================================ */
// Напиши клас Client, який створює об'єкт із властивостями login та email.
//    login повинен бути суспільною властивістю, а email приватним.
//    Доступ до email зроби через геттер та сетер.
//    Перед тим як змінити імейл, у сеттері потрібно викликати приватний метод, який валідуватиме імейл (наявність собачки та крапки).
//    Якщо імейл невалідний – нічого не робити і вивести в консоль 'Email is not valid!'

// class Client {
//   #email;

//   constructor({ login, email }) {
//     this.login = login;
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     if (!this.#isValid(newEmail)) {
//       console.log("Email is not valid!");
//       return `Email is not valid!`;
//     }
//     this.#email = newEmail;
//   }

//   #isValid(newEmail) {
//     return newEmail.includes("@") && newEmail.includes(".");
//   }
// }

// const mango = new Client({
//   login: "Mango",
//   email: "mango@dog.woof",
// });

// console.log("mango", mango);

// mango.email = "mango@.woof";
// console.log("mango", mango);
// mango.email = "mango@woof";
//console.log("mango", mango);
/* ================================================================================ */
