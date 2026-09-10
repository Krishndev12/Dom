/*
console.log("Pakode Banao");

for (let i = 1; i < 999999999; i++) {}

// ye line thodi der baad execute hoti hai kyuki iske pahle ekk loop chal rahi hai wo jyada time le rahi hai tab tak execution iss line tak pahuchti nahi hai. this is synchronous.
console.log("Chatni aa gayi");


console.log("pakode kha lo")
*/

console.log("Pakode Banaw");

setTimeout(() => {
  console.log("Chatni aa gaya");
}, 3000); // kyuki ye hai async method.

// ye line ko wait nahi karni padti execute ho jati hai.
console.log("pakode kha lo");
