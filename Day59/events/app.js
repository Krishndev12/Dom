// const input = document.getElementById("inp");
// // console.log(input);

// // input.addEventListener("change", (e) => {
// //   console.log(e.target.value);
// // });

// input.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });

// window.addEventListener("scroll", () => {
//   console.log("page scrolled");
// });

// console.log("JS file loaded");
// window.addEventListener("load", (e) => {
//   console.log("page relaod");
// });

// input.addEventListener("mouseover", () => {
//   console.log("mouse entered");
// });

// input.addEventListener("mouseenter", () => {
//   console.log("mouce entered");
// });

// input.addEventListener("dblclick", () => {
//   console.log("double clicked");
// });

const input = document.getElementById("inp");
const btn = document.getElementById("dark");
const puriDiv = document.getElementById("puri-body");

btn.addEventListener("click", () => {
  if (btn.innerText === "Dark") {
    puriDiv.style.backgroundColor = "black";
    btn.innerText = "Light";
  } else {
    puriDiv.style.backgroundColor = "white";
    btn.innerText = "Dark";
  }
});

window.addEventListener("load", () => {
  input.focus();
});

// input.addEventListener("focus", () => {
//   input.style.width = "300px";
// });

// input.addEventListener("blur", () => {
//   input.style.width = "150px";
// });

// input.addEventListener("input", (e) => {
//   console.log(e.target.value);
//   // console.log(e.target.value.length);
// });

input.addEventListener("change", (e) => {
  console.log(e.target.value);
});
