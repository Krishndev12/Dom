// console.log(Promise.prototype); promise ekk object hi hai at the end, isme kon kon method available hai wahi dekh rahe hai yaha.

// console.log(Promise.prototype.__proto__); // promise object kis prototype se aaya hai.

/*
// const c1 = new Promise((resolve, reject) => {
//   let arr = [1, 2];

//   if (arr.length > 0) {
//     resolve(
//       "yaha jo bhi chiz pass karege wahi return ho jayega agar kamm fullfilled yani resolve hua.",
//     );
//   } else {
//     reject(
//       "yaha jo bhi chiz pass karege wahi return ho jayega agar kamm reject hua.",
//     );
//   }



*/
/*
  if (arr.length > 0) {
    resolve(arr);
  } else {
    reject("data nahi mila");
  }
});
console.log(c1);
*/

/*
// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({ name: "Shubham" });

    reject({ err: "kamm nahi hua" });
  }, 4000);
});

// console.log(p1);  // yaha Async code ka chakkar hai pahle 40th line chal jata hai.

p1.then((data) => {
  // resolve jo return karta hai wo ye data me hota hai ham usko hi print karwate hai
  console.log(data);
})
  .catch((error) => {
    // reject jo return karta hai wo ye error me hota hai ham usko hi print karwate hai
    console.log(error);
  })
  .finally(() => {
    console.log("mai to chalunga hi");
  });

  */

const c1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let arr = [1, 2, 3];
    if (arr.length > 0) {
      resolve("kamm hua");
    } else {
      reject("kamm nahi hua");
    }
  }, 3000);
});

// console.log(c1); //promise

c1.then((data) => {
  console.log(data);
})
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("mai to chalunga hi");
  });
