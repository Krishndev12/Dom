/*
function myFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isPresent = true;
      if (isPresent) {
        resolve("user is present");
      } else {
        reject("user is not present");
      }
    });
  }, 3000);
}

myFunction()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

  */

//   ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

async function myFunction() {
  const u1 = new Promise((res, rej) => {
    setTimeout(() => {
      let user = true;

      if (user) {
        res("user found");
      } else {
        rej("user not found");
      }
    }, 2000);
  });
  const data = await u1; // await matlab jab tak u1 promise resolve naa ho jaye tab tak wait karega . ye line.

  console.log(data);
}

myFunction();

// with try/catch




