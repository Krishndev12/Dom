/*
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let p1 = new Person("krishna", 24);
// console.log(p1);

console.log(p1 instanceof Person); // to check p1 objcet has made by which class.
*/

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 prototype 🔥🔥🔥🔥🔥🔥🔥🔥

/*
// to know the by which prototype it has made.
let arr = [1, 2, 3, 4];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);
*/

// let car1 = {
//   name: "BMW",
//   start() {
//     console.log("car started");
//   },
// };

// let car2 = {
//   name: "Audi",
//   start() {
//     console.log("car started");
//   },
// };

// car1.start();
// car2.start();

/*
class Car {
  constructor(name) {
    this.name = name;
  }

  start() {
    console.log(`${this.name} has started`);
  }
}

let car1 = new Car("BMW");
car1.start();
let car2 = new Car("Audi");
car2.start();
*/

/*
class Car {
  start() {
    console.log("Started");
  }
}

const car1 = new Car();
console.log(car1.prototype);
console.log(car1.__proto__);

*/

let s = new Set();
console.log(Set.prototype);
console.log(Set.prototype.__proto__);
