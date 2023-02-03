const container = document.querySelector(".container");

// function showCircle(cx, cy, radius) {
//   let div = document.createElement("div");
//   div.style.width = 0;
//   div.style.height = 0;
//   div.style.left = cx + "px";
//   div.style.top = cy + "px";
//   div.className = "circle";
//   document.body.append(div);

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       div.style.width = radius * 2 + "px";
//       div.style.height = radius * 2 + "px";
//       div.addEventListener("transitionend", function handler() {
//         div.removeEventListener("transitionend", handler);
//         resolve(div);
//       });
//     }, 1000);
//   });
// }

// showCircle(150, 150, 100).then((div) => {
//   div.classList.add("message-ball");
//   div.append("Hello, world!");
// });

let x = 3;
function fn() {
  x = 10;
  return;
  function x() {}
}

fn();
console.log(x);
