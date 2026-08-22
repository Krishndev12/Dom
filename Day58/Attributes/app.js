/*
const dabba = document.getElementById("dabba");

let p1 = document.createElement("p");
p1.innerText = "Hello from p1";
dabba.appendChild(p1);
// console.log(p1);
let p2 = document.createElement("p");
p2.innerText = "Hello from p2";
dabba.appendChild(p2);
let p3 = document.createElement("p");
p3.innerText = "Hello from p3";
dabba.appendChild(p3,p2); // can't add more than one element in one appendChild.

// dabba.append(p1, p2, p3);
*/

//set Attribute

/*
const heading = document.getElementById("heading");

heading.setAttribute("class", "head");

// console.log(heading.getAttribute("class")); // to get information about heading.

heading.setAttribute("style", "background-color:red "); // by set attribute.

*/

let fruits = [
  "Apple",
  "Banana",
  "Mango",
  "Orange",
  "Grapes",
  "Papaya",
  "Guava",
  "Pineapple",
  "Watermelon",
  "Strawberry",
];

const list = document.getElementById("list");
let count = 1;

for (let items of fruits) {
  let li = document.createElement("li");
  li.innerText = items;
  li.setAttribute("class", "items");
  li.setAttribute("id", count);
  count += 1;
  list.append(li);
}
