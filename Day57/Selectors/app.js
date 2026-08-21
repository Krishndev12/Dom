const btn = document.getElementById("btn");
// console.log(btn);

const btnByTagName = document.getElementsByTagName("button");
// console.log(btnByTagName);

const btnByClassName = document.getElementsByClassName("btns");
// console.log(btnByClassName);

// const btnByQuerySelectorId = document.querySelector("#btn")
// console.log(btnByQuerySelectorId);

const btnByQuerySelectorAllId = document.querySelectorAll("#btn");
// console.log(btnByQuerySelectorAllId);

const heading = document.getElementById("head");
// console.log(heading);

console.log(heading.innerText);
console.log(heading.textContent);
console.log(heading.innerHTML);

// heading.remove();

// how to create an element in DOM, and after creating you will have to attach that in html file.

// element createion
let div = document.createElement("div");

// html me ekk main tag hai usme ham chahte hai ki ye element jaye .

const main = document.getElementById("main");
main.innerText = "hello in my div";
main.appendChild(div); // wo main tag ke andar div element append ho jata hai.
