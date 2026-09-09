/*
// without "use strict"

a = 10;
console.log(a); // 10

// function test() {
//   console.log(this); // Window object
// }
// test();
*/

// ⭐⭐⭐⭐⭐ with "strict mode"
// "use strict"; // ye strict mode globally apply ho rahi hai. ham kisi block ke andar chahe to uske andar bhi use kar sakte hai.

// a = 10;
// console.log(a); //app.js:16 Uncaught ReferenceError: a is not defined

// function test() {
//   console.log(this); // undefined
// }
// test();

let a = 88;
console.log(typeof a);