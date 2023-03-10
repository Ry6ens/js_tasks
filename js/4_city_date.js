/// Дан словарь из городов и дат выступлений рок-группы

/// Необходимо преобразовать словарь (key-value) в массив из названий городов
/// Вывод городов должен быть в хронологическом порядке
/// Города в которых концерт уже прошел нужно исключить
/// Результат ["Запорожье", "Харьков", "Одесса"]

const concerts = {
  Киев: new Date("2019-04-01"),
  Харьков: new Date("2022-10-02"),
  Днепр: new Date("2020-04-21"),
  Львов: new Date("2021-07-15"),
  Одесса: new Date("2023-04-18"),
  Запорожье: new Date("2022-08-10"),
};

/* =============================================================================================================================== */

const cities = (concerts) => {
  return Object.keys(concerts)
    .filter((el) => concerts[el] > new Date())
    .sort((a, b) => concerts[a] - concerts[b]);
};

const result = cities(concerts);
console.log(result);
