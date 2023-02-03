//Coffee API - виды кофе + ингредиенты

const card = document.querySelector(".card");

const members = [
  { member: "John", id: 111, coffee: "Espresso" },
  { member: "Bob", id: 222, coffee: "Americano" },
  { member: "Lena", id: 333, coffee: "Doppio" },
  { member: "Liza", id: 444, coffee: "Latte" },
];

//Find member by id using Promise with SetTimeout
const getFamilyId = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const member = members.find((el) => el.id === id);
      if (member) {
        resolve(member);
      }
      reject(Error("Member not found"));
    }, 0);
  });
};

//Call function to find coffee from member
getFamilyId(333)
  .then((data) => {
    return getCoffee(data);
  })
  .then((newMember) => {
    card.innerHTML = `<div class="card_image">
            <img src="${newMember.coffee.image}" alt="">
        </div>
        <div class="card_name">Name: ${newMember.member}</div>
        <div class="card_coffe-drink">Coffe drink: ${newMember.coffee.title}</div>
        <div class="card_description">Description: ${newMember.coffee.description}</div>`;
    console.log(newMember);
  })
  .catch((err) => {
    card.innerHTML = `<div class="error">Member not found</div>`;
    console.log("Member not found");
  });

//Get coffee from API by member
const getCoffee = (member) => {
  const coffeePromise = fetch("https://api.sampleapis.com/coffee/hot");
  return coffeePromise
    .then((data) => data.json())
    .then((list) => {
      const coffee = list.find((el) => el.title === member.coffee);
      return {
        ...member,
        coffee: coffee,
      };
    });
};
