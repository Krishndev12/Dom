// console.log("Maggie bana");

// setTimeout(() => {
//   console.log("Sauce");
// }, 0);

// console.log("Maggie kha lo");

/*
console.log("Maggie bana");

setTimeout(() => {
  console.log("Sauce"); // yaha ye line for loop ke wajah se thoda late print hoga kyuki call stack me line 17th ka function pahle pahuch gaya wo sync hai, jabki line 12th async hai to isko wo sabhi process follow karni padegi. even though timer is 0. but still process to follow karni padegi.
}, 0);

console.log("Maggie kha lo");

for (let i = 1; i < 999999999; i++) {} //
*/

/*
// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ ekk interview question

setTimeout(() => {
  console.log("One");
}, 3000);
setTimeout(() => {
  console.log("Two");
}, 3000);
setTimeout(() => {
  console.log("Three");
}, 3000);

// teeno setTimeout lagbhag same jayege event loop me feer callback queue me, feer One wala cb jayega call stack me feer Two and feer Three.

// sab ekk hi baar print hoga kuchh milisecond ka diffrence hoga .

*/

/*
// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
setTimeout(() => {
  console.log("One");
}, 3000);
setTimeout(() => {
  console.log("Two");
}, 4000);
setTimeout(() => {
  console.log("Three");
}, 5000);

// sab lagbhag same time me jayege web api me feer sabki timer to same time par start hogi lagbhag. 3 sec baad One ka callback pahuch jayega callback queue me feer 1 s baad Two ka feer 1s baad Three ka.

// first clg 3s me print hoga, feer Two 1s baad , feer Three 1s baad
*/

/*
// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

setTimeout(() => {
  console.log("One");
}, 3000);
setTimeout(() => {
  console.log("Two");
}, 2000);
setTimeout(() => {
  console.log("Three");
}, 1000);

// web api me teeno same time pahuchega but waha se nikal ke callback queue me kon jata hai ye matter karta hai timer ke according.

*/

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 setInterval

// setInterval(() => {
//   console.log("hi");
// }, 2000);

/*
const interval = setInterval(() => {
  console.log("Hello");
}, 3000);

clearInterval(interval);
*/

// const interval = setInterval(() => {
//   console.log("hello");
// }, 0);

// setTimeout(() => {
//   clearInterval();
// }, 1000);

// const interval = setInterval(() => {
//   console.log("Hello");
// }, 1000);

// // clearInterval(interval);

// setTimeout(() => {
//   clearInterval(interval);
// }, 1000);

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥Guessing output

/*
// ⭐⭐⭐⭐
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
*/

/*
// ⭐⭐⭐⭐

console.log("Start");

const id = setInterval(() => {
  console.log("Hello");
}, 1000);

setTimeout(() => {
  clearInterval(id);
  console.log("Stop");
}, 3500);

console.log("End");
*/

/*
// ⭐⭐⭐⭐
setTimeout(() => {
  console.log("Timeout");
}, 0);

const id = setInterval(() => {
  console.log("Interval");
  clearInterval(id);
}, 0);

console.log("Done");
*/

/*
// ⭐⭐⭐⭐
console.log("A");

setTimeout(() => {
  console.log("B");

  setTimeout(() => {
    console.log("C");
  }, 0);
}, 0);

console.log("D");
*/

/*
// ⭐⭐⭐⭐
const id = setInterval(() => {
  console.log("A");
}, 0);

setTimeout(() => {
  console.log("B");
  clearInterval(id);
}, 10);

console.log("C");
*/

// 🔥🔥🔥🔥🔥🔥🔥🔥 Interview question 🔥🔥🔥🔥🔥🔥

// 1. create your own setInterval( )  function , using setTimeout( )

function myInterval(fn, timer) {
  for (let i = 1; i < timer; i++) {
    setTimeout(() => {
      fn();
    }, timer);
  }
}

let interval = myInterval(() => {
  console.log("hi");
}, 1000);

clearInterval(interval);
