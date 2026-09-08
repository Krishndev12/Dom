const nameInp = document.getElementById("nInp");
const btn = document.getElementById("btn");

localStorage.getItem("name");

btn.addEventListener("click", () => {
  if (nameInp.value.length == 0) {
    return;
  }

  let names = JSON.parse(localStorage.getItem("name")) || [];
  let val = nameInp.value;
  console.log(val);
  localStorage.setItem(`names`, val);
  names.push(val);
  nameInp.value = "";
});

// console.log(names);
