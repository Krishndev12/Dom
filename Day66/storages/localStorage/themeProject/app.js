const puriBody = document.getElementById("puriBody");
const btn = document.getElementById("dark");

const savedTheme = localStorage.getItem("theme");

btn.addEventListener("click", (e) => {
  // console.log(e.target.textContent);
  if (btn.textContent == "dark") {
    puriBody.style.backgroundColor = "black";
    btn.textContent = "light";
    localStorage.setItem("theme", "dark");
  } else {
    puriBody.style.backgroundColor = "white";
    btn.textContent = "dark";
    localStorage.setItem("theme", "light");
  }
});

window.addEventListener("load", () => {
  if (savedTheme === "dark") {
    puriBody.style.backgroundColor = "black";
    btn.textContent = "light";
  } else {
    puriBody.style.backgroundColor = "white";
    btn.textContent = "dark";
  }
});
