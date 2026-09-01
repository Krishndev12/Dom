const gParent = document.getElementById("gParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

child.addEventListener(
  "click",
  (e) => {
    console.log("child");
  },
  true,
);

parent.addEventListener(
  "click",
  () => {
    console.log("parent");
  },
  true,
);

gParent.addEventListener(
  "click",
  () => {
    console.log("Gparent");
  },
  true,
);
