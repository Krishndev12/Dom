const boxes = document.querySelectorAll(".boxes");
const footer = document.getElementById("footer");
const article = document.getElementById("parent");
// console.log(article);

// for (let item of boxes) {
//   item.addEventListener("click", (e) => {
//     // footer.innerText = e.target.value;
//     // console.log(e.target.innerText);

//     // footer.innerText += e.target.innerText + ",";

//     let p = document.createElement("p");
//     p.innerText = e.target.innerText;

//     footer.append(p);
//   });
// }

// event delegation

article.addEventListener("click", (e) => {
  //   if (!e.target.classList.contains("boxes")) {
  //     return;
  //   }

  //   console.log(e);

  //   if (e.target == "main") {
  //     return;
  //   }

  //   console.dir(e.target);

  if (e.target.tagName == "MAIN") {
    return;
  }

  let p = document.createElement("p");
  p.innerText = e.target.innerText;

  footer.append(p);
});
