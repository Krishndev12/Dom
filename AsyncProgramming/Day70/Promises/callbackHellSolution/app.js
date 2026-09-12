// function clickPicture(fn) {
//   setTimeout(() => {
//     console.log("picture clicked");
//     fn();
//   }, 3000);
// }

// function selectPicture(fn) {
//   setTimeout(() => {
//     console.log("picture selected");
//     fn();
//   }, 1000);
// }

// function selectFilter(fn) {
//   setTimeout(() => {
//     console.log("filter selected");
//     fn();
//   }, 1000);
// }

// function chooseCaption(fn) {
//   setTimeout(() => {
//     console.log("choose caption");
//     fn();
//   }, 1000);
// }

// function uploadPhoto() {
//   setTimeout(() => {
//     console.log("photo uploaded");
//   }, 1000);
// }

// ⭐⭐
// clickPicture(selectPicture(selectFilter(chooseCaption(uploadPhoto())))); // ye sahi syntax nahi hai yaha to expected output ulta aata hai. andar se code execution start hota hai.kyuki yaha anadr ka code pahle chal jata hai.

// ⭐⭐
/*
isiliye ham ye syntax follow kiye .
// we able to achieved the output but the syntax is tough it is called callback hell.
clickPicture(() => {
  selectPicture(() => {
    selectFilter(() => {
      chooseCaption(() => {
        uploadPhoto();
      });
    });
  });
});
*/

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

function clickPicture() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("picture clicked");
      res(); // yaha ham resolve me kuchh bhi pass nahi kar rahe hai kyuki hame kuchh data receive karni hai nahi baad me. ham yaha console hi kar liye jo output cahiye thi mujhe.
    }, 3000);
  });
}

function selectPicture() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("picture selected");
      res();
    }, 1000);
  });
}

function selectFilter() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("filter selected");
      res();
    }, 1000);
  });
}

function chooseCaption() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("choose caption");
      res();
    }, 1000);
  });
}

function uploadPhoto() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("photo uploaded");
      res();
    }, 1000);
  });
}

// kaise ham ekk dusre par dependable async function ko handle karte hai without callback hell.

clickPicture()
  .then(selectPicture)
  .then(selectFilter)
  .then(chooseCaption)
  .then(uploadPhoto);

// clickPicture fn ko jab call karte hai, to ekk promise return kar raha hai. ham jante hai yaha resolve ho raha hai bas , isiliye .then lagaye usme, .then() me ekk callback function pass karte hai, jo at the function hai to yaha bhi ekk function pass kar rahe hai.

//   matlab clickPicture() 3 se 2, 2 se 1 and 1s ke baad resolve ho jayega to selectPicture() call hua to ye 1s baad resolve ho jayega to selectFilter( ) and so on.


// clickPicture() iske baad flow yw function ke andar gaya to setTimeout chala 3 se 2, 2 se 1 and 1s ke baad ke baad print ho gaya clg line.feer res() matlab function resolve ho gaya.

