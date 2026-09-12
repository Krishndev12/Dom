const container = document.getElementById("container");
// const api = "https://dummyjson.com/products";

/*
fetch(api)
  .then((res) => {
    return res.json();
  })
  .catch((err) => {
    console.log(err.message);
  })
  .then((d) => {
    console.log(d.products);
    let arr = d.products;

    arr.map((item) => {
      //   console.log(item);
      let article = document.createElement("article");
      let h1 = document.createElement("h1");
      let p = document.createElement("p");
      let img = document.createElement("img");
      h1.innerText = item.id;
      p.innerText = item.title;
      img.src = item.images;

      article.append(h1, p, img);
      container.append(article);
    });
    // console.log(arr);
  });

  */

/*
const api = "https://dummyjson.com/products";

async function fetchUserData() {
  try {
    const response = await fetch(api);

    const data = await response.json();

    // console.log(data.products);
    let arr = data.products;
    // console.log(arr);

    arr.forEach((item) => {

      let article = document.createElement("article");
      let h1 = document.createElement("h1");
      let p = document.createElement("p");
      let img = document.createElement("img");

      h1.innerText = item.id;
      p.innerText = item.title;
      img.src = item.images[0];

      article.append(h1, p, img);
      container.append(article);
    });
  } catch (err) {
    console.log({ error: err.message });
  }
}

fetchUserData();
*/

async function getuser() {
  const api = "https://dummyjson.com/products";

  const res = await fetch(api);
  const data = await res.json();

  console.log(data);
}

getuser();
