const container = document.getElementById("main-container");
/*
const api = "https://fakestoreapi.noksha.dev/api/walmartproducts";

fetch(api)
  .then((res) => {
    return res.json();
  })
  .then((d) => {
    console.log(d);
    // console.log(d.data);
    let arr = d.data;

    arr.forEach((item) => {
      //   console.log(item);
      let article = document.createElement("article");
      let h1 = document.createElement("h1");
      let p = document.createElement("p");
      let img = document.createElement("img");

      article.classList.add("article");
      img.setAttribute("class", "image");

      h1.innerText = item._id;
      p.innerText = item.title;
      img.src = item.image;

      article.append(h1, p, img);
      container.append(article);
    });
  })
  .catch((err) => {
    console.log({ err: err.message });
  });

  */

async function getProducts() {
  const api = "https://fakestoreapi.noksha.dev/api/walmartproducts";

  const response = await fetch(api);

  const data = await response.json();

  //   console.log(data);
  let arr = data.data;
  //   console.log(arr);

  arr.forEach((item) => {
    //   console.log(item);
    let article = document.createElement("article");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    let img = document.createElement("img");

    article.classList.add("article");
    img.setAttribute("class", "image");

    h1.innerText = item._id;
    p.innerText = item.title;
    img.src = item.image;

    article.append(h1, p, img);
    container.append(article);
  });
}

getProducts();
