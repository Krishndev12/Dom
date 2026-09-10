/*
function clickPicture() {
  setTimeout(() => {
    console.log("Picture Clicked");
  }, 2000);
}

function selectPicture() {
  setTimeout(() => {
    console.log("Picture selected");
  }, 3000);
}

function captionChoose() {
  setTimeout(() => {
    console.log("Choosed caption");
  }, 4000);
}

function photoUpload() {
  setTimeout(() => {
    console.log("picture uploaded");
  }, 5000);
}

clickPicture();
selectPicture();
captionChoose();
photoUpload();

*/

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
/*
function clickPicture() {
  setTimeout(() => {
    console.log("Picture Clicked");
  }, 1000);
}

function selectPicture() {
  setTimeout(() => {
    console.log("Picture selected");
  }, 1000);
}

function captionChoose() {
  setTimeout(() => {
    console.log("Choosed caption");
  }, 1000);
}

function photoUpload() {
  setTimeout(() => {
    console.log("picture uploaded");
  }, 1000);
}

clickPicture(selectPicture(captionChoose(photoUpload()))); // ye sahi nahi hai
// isme to ulta aa jayega expected output.


*/

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

function clickPicture(fn) {
  setTimeout(() => {
    console.log("Picture Clicked");
    fn();
  }, 3000);
}

function selectPicture(fn) {
  setTimeout(() => {
    console.log("Picture selected");
    fn();
  }, 2000);
}

function captionChoose(fn) {
  setTimeout(() => {
    console.log("Choosed caption");
    fn();
  }, 3000);
}

function photoUpload() {
  setTimeout(() => {
    console.log("picture uploaded");
  }, 1000);
}

//this is callback Hell
clickPicture(() => {
  selectPicture(() => {
    captionChoose(() => {
      photoUpload();
    });
  });
});

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐

// function A(x) {
//   console.log("A");
//   x();
// }

// function B() {
//   console.log("B");
// }

// A(B());
