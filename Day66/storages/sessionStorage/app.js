const input = document.getElementById("inp");
const btn = document.getElementById("btn");
const list = document.getElementById("list");

let data = JSON.parse(localStorage.getItem("values")) || [];

btn.addEventListener("click", () => {
  let val = input.value;
  data.push(val);
  localStorage.setItem("values", JSON.stringify(data));

  let li = document.createElement("li");

  //   console.log(val);
  li.innerText = val;
  list.append(li);

  input.value = "";
});
