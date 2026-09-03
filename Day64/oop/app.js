// constructor function

/*
//ye blueprint hai kya kya object me rahega wo yaha arguments me dete hai.
function Users(n, a, c) {
  this.name = n;
  this.age = a;
  this.city = c;
}

// ye objects create kar rahe hai blueprints se .
let p1 = new Users("abc", 22, "Delhi");
let p2 = new Users("ngh", 12, "Mumbai");
console.log(p1, p2);

*/

/*
//🔥🔥🔥🔥🔥Class keyword 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

/*
// kyuki class keyword me parenthesis nahi hai to parameter kaise receive karege. hardcode karege to sabhi objects me same data aa jayegi.
class Users {
  name = "ABC";
  age = 24;
}

let p1 = new Users();
let p2 = new Users();
console.log(p1, p2);

*/

// isliye class keyword me ekk constructor fn banate hai . taki parameter receive kar sake. constructor function jaisa karte hai.

// class Users {
//   constructor(n, a, c) {
//     this.name = n;
//     this.age = a;
//     this.city = c;
//   }
// }

// let p1 = new Users("ABC", 22, "Dlehi");
// let p2 = new Users("mkl", 19, "Mumbai");
// console.log(p1, p2);

// */

/*
//🔥🔥🔥🔥🔥🔥🔥🔥🔥 Method in class.
class Car {
  constructor(n, t, c) {
    this.name = n;
    this.tyre = t;
    this.color = c;
  }

  tellAboutCAr() {
    console.log(this.name, this.tyre, this.color);
  }
}

let c1 = new Car("BMW", 4, "Red");
let c2 = new Car("Audi", 4, "Yellow");
console.log(c1);


//⭐⭐method kis object ke liye use karna hai batana padta hai oops me. isi tarah se call karte hai agar ham class ke andar ka method ko use karna chahte hai.
c1.tellAboutCAr();
c2.tellAboutCAr();
*/

////🔥🔥🔥🔥🔥🔥🔥🔥🔥 Method in constructor function.

function Car(n, t, c) {
  this.name = n;
  this.tyre = t;
  this.color = c;
}

let c1 = new Car("BMW", 4, "red");
console.log(c1);

Car.prototype.sayAboutCar = function () {
  console.log(`the name of this car is ${this.name}`);
};


//⭐⭐method kis object ke liye use karna hai batana padta hai oops me. isi tarah se call karte hai agar ham constructor fn ke andar ka method ko use karna chahte hai.
c1.sayAboutCar();
