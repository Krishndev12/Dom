const leftDiv = document.getElementById("left-div");
const taskInput = document.getElementById("taskInput");
const taskArea = document.getElementById("taskArea");
const addButton = document.querySelector("#left-div button");
const rightDiv = document.getElementById("right-div");

addButton.addEventListener("click", () => {
  const taskVal = taskInput.value;
  const descVal = taskArea.value;
  if (!taskVal || !descVal) {
    return;
  }
  let article = document.createElement("article");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  let delButton = document.createElement("button");
  delButton.innerText = "delete";
  let editButton = document.createElement("button");
  editButton.innerText = "edit";

  h1.innerText = taskVal;
  p.innerText = descVal;

  rightDiv.append(article);
  article.append(h1, p, delButton, editButton);

  taskInput.value = "";
  taskArea.value = "";

  delButton.addEventListener("click", () => {
    article.remove();
  });

  editButton.addEventListener("click", () => {
    taskInput.value = h1.innerText;
    taskArea.value = p.innerText;

    article.remove();
  });
});
