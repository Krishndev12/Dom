const sidebar = document.getElementById("sidebar");
const spans = document.querySelectorAll(".spans");
console.log(spans);

sidebar.addEventListener("mouseenter", (e) => {
  sidebar.style.width = "300px";
  for (let item of spans) {
    item.style.display = "block";
  }
});

sidebar.addEventListener("mouseleave", () => {
  sidebar.style.width = "80px";
  for (let item of spans) {
    item.style.display = "none";
  }
});
