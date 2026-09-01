const gParent = document.getElementById("gParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

child.addEventListener("click", (e) => {
  console.log("child");
});

parent.addEventListener("click", () => {
  console.log("parent");
});

gParent.addEventListener("click", () => {
  console.log("Gparent");
});
