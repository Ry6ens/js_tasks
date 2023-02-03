//Make Choose inputDataJSON
let inputDataJSON = {
  data: [
    { user: "mike@mail.com", rating: 20, disabled: false },
    { user: "greg@mail.com", rating: 14, disabled: false },
    { user: "john@mail.com", rating: 25, disabled: true },
  ],
  condition: { exclude: [{ disabled: true }], sort_by: ["rating"] },
};

// const inputDataJSON = {
//   data: [
//     { name: "John", email: "john2@mail.com" },
//     { name: "John", email: "john1@mail.com" },
//     { name: "Jane", email: "jane@mail.com" },
//   ],
//   condition: { include: [{ name: "John" }], sort_by: ["email"] },
// };         {"name": "John", "email": "john2@mail.com"}]}

let resultTask = { result: [] };
console.log(resultTask);

function findCondition(data) {
  const { condition } = data;
  const conditionKeys = Object.keys(condition);
  if (conditionKeys.includes("include")) {
    const result = sortBy(include(data));
    return resultTask.result.push(result);
  }
  if (conditionKeys.includes("exclude")) {
    const result = sortBy(exclude(data));
    return resultTask.result.push(result);
  }
}

function include(task) {
  const { data, condition } = task;

  const searchValueLowerCase = condition.include.map((el) => el.name);

  const newContactFilterd = data.filter(({ name }) => {
    const nameLowerCase = name.toLowerCase();

    return nameLowerCase.includes(
      searchValueLowerCase.toString().toLowerCase()
    );
  });
  return newContactFilterd;
}

function sortBy(data) {
  const { condition } = inputDataJSON;
  const sortBy = condition.sort_by.toString();

  if (sortBy === "email") {
    const sortEmail = data.sort((a, b) => {
      const emailA = a.email.toLowerCase();
      const emailB = b.email.toLowerCase();
      if (emailA < emailB) {
        return -1;
      }
    });
    return sortEmail;
  }

  if (sortBy === "rating") {
    const sortRating = data.sort((a, b) => a.rating - b.rating);
    return sortRating;
  }
}

function exclude({ data }) {
  const newContactFilterd = data.filter(({ disabled }) => !disabled);
  return newContactFilterd;
}

findCondition(inputDataJSON);
