// console.log(window);
// console.log(window.localStorage);
// console.log(localStorage);

localStorage.setItem("Theme", "Dark");
console.log(localStorage.getItem("isPresent"));
console.log(localStorage.getItem("name"));

localStorage.removeItem("name");
localStorage.clear();

// ⭐⭐⭐⭐⭐
/*
localStorage.setItem("fruits", ["Apple", "Mango", "Guava", "Grapes"]);

let data = localStorage.getItem("fruits");
console.log(typeof data);
*/

// ⭐⭐⭐⭐⭐

/*
let fruits = ["Apple", "Mango", "Guava", "Grapes"];
localStorage.setItem("fruits", JSON.stringify(fruits));

let data = JSON.parse(localStorage.getItem("fruits"));
console.log(data);
*/

// ⭐⭐⭐⭐⭐
// this is how we store array and objects in localStorage.
let user = {
  name: "krishna",
  age: 24,
  city: "Delhi",
};

localStorage.setItem("user", JSON.stringify(user));

let userInfo = JSON.parse(localStorage.getItem("user"));
console.log(userInfo);

const puriBody = document.getElementById("puriBody");
const btn = document.getElementById("dark");

btn.addEventListener("click", (e) => {
  // console.log(e.target.textContent);
  if (btn.textContent == "dark") {
    puriBody.style.backgroundColor = "black";
    btn.textContent = "light";
  } else {
    puriBody.style.backgroundColor = "white";
    btn.textContent = "dark";
  }
});
