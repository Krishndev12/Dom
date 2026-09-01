const h1 = document.querySelector("h1");
const buttons = document.querySelectorAll("button");
const incrementBtn = buttons[0];
const decrementBtn = buttons[1];
const resetBtn = buttons[2];

incrementBtn.addEventListener("click", () => {
  h1.innerText++;
});
decrementBtn.addEventListener("click", () => {
  if (h1.innerText == 0) {
    return;
  }

  h1.innerText--;
});
resetBtn.addEventListener("click", () => {
  h1.innerText = 0;
});
