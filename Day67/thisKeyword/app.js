// "use strict";
// console.log(this);

// function myName(name) {
//   console.log(this);
// }

// myName("krishna");

// const user = {
//   name: "Krishna",

//   greet: function () {
//     console.log(this.name);
//   },
// };

// const fn = user.greet;

// fn();

/*
// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 1. Global scope.

"use strict";
console.log(this); // Window

*/

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 2. this inside a normal function.

/*
// 🔥🔥🔥🔥🔥In non-strict mode
// In non-strict mode in a browser, this can be the global object (window).
function greet() {
  console.log(this); // Window
}

greet();
*/

/*
// 🔥🔥🔥🔥🔥 with strict mode

"use strict";
function greet() {
  console.log(this); // undefined
}
greet();

*/

//⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 3. this inside an object method ⭐

/*
const obj = {
  name: "Shukhdev",
  age: 23,

  checkThis: function () {
    console.log(this); // obj
  },

  checkThis2: () => {
    console.log(this); // Window
  },

  checkThis3: function () {
    function myFunction() {
      console.log(this); // Window
    }
    myFunction();
  },

  checkThis4: () => {
    const fn = () => {
      console.log(this); // Window
    };
    fn();
  },

  checkThis5: function () {
    const tumharaFn = () => {
      console.log(this); // obj
    };
    tumharaFn();
  },
};

obj.checkThis();
obj.checkThis2();
obj.checkThis3();
obj.checkThis4();
obj.checkThis5();

*/

// const book = {
//   name: "science",
//   price: 200,

//   myFunction: () => {
//     console.log(this);
//   },
// };

// book.myFunction();

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ Very important: this changes when you separate the method

/*
const user = {
  name: "Krishna",

  greet: function () {
    console.log(this.name);
  },
};

user.greet(); 
*/

/*
const user = {
  name: "Krishna",

  greet: function () {
    console.log(this.name);
  },
};

const fn = user.greet;
fn();

*/

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐5. this with nested functions
/*
const user = {
  name: "Krishna",

  greet: function () {
    function inner() {
      console.log(this.name);
    }

    inner();
  },
};

user.greet();
*/

// 6. Arrow function behaves differently ⭐⭐⭐
const user = {
  name: "Krishna",

  greet: function () {
    const inner = () => {
      console.log(this.name);
    };

    inner();
  },
};

user.greet();
/*
Nahi — yahan greet() ko window point nahi karna chahiye, because greet() ko tum user.greet() ke through call kar rahe ho.

Tumhara confusion bilkul normal hai. Main flow se samjhata hoon:

const user = {
  name: "Krishna",

  greet: function () {
    const inner = () => {
      console.log(this.name);
    };

    inner();
  },
};

user.greet();
Step 1: user.greet()

Sabse important line:

user.greet();

Ye normal function call nahi hai.

Ye object method call hai.

Isliye:

this = user

So greet ke andar:

this.name

ka matlab:

user.name

which is:

"Krishna"
Step 2: inner() kya hai?

Ab greet ke andar:

const inner = () => {
  console.log(this.name);
};

inner();

inner arrow function hai.

Arrow function ka apna this nahi hota.

To arrow function apne surrounding/parent scope se this leta hai.

Uska parent hai:

greet: function () {
   // this = user

   const inner = () => {
      // arrow function yahan apna this nahi banayega
      console.log(this.name);
   };
}

Therefore:

greet's this = user
        ↓
inner arrow function inherits this
        ↓
this = user
        ↓
this.name
        ↓
"Krishna"
Output:
Krishna
Tumhari main confusion

Tum soch rahe ho:

"greet normal function hai, to this = window hona chahiye."

Rule ye nahi hai ki normal function → always window.

Correct rule:

Normal function ka this depend karta hai ki function ko kaise call kiya gaya hai.

Compare:
greet();

Plain call → this = window (non-strict browser) / undefined (strict mode)

But:

user.greet();

Object ke through call → this = user

And:

inner();

inner arrow function hai → apna this nahi banayega, parent greet ka this use karega.

Ek line mein yaad rakho:
Normal function → this call-site se decide hota hai
Arrow function  → this parent se leta hai

Is example mein:

user.greet()
     ↓
greet ka this = user
     ↓
inner()  ← arrow function
     ↓
inner ka this = greet ka this
     ↓
this = user
     ↓
this.name = "Krishna"

Output: Krishna
*/

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐9. call()
// call() allows you to explicitly tell a function what this should be.

/*
let p1 = {
  name: "ABC",
  age: 10,

  introduce: function () {
    console.log(`hello my name is ${this.name} and i am ${this.age} years old`);
  },
};

let p2 = {
  name: "Shukhdev",
  age: 60,
};

p1.introduce();
p1.introduce.call(p2); // call() iske andar wahi likhna hai jis object ko ham chahte hai ki wo pint kare this. call() immedientely call kara deta hai function ko.

// p1.introduce.call(p2); p1.introduce to call kar rahe hai but .call(p2) ke wajah se abb this p2 ko pint karega .

*/

/*
function intro(city, country) {
  console.log(
    `my name is ${this.name} and i am ${this.age} years old and i live in ${city} in country ${country}`,
  );
}

let p1 = {
  name: "Amrik",
  age: 55,
};

let p2 = {
  name: "Sukhdev",
  age: 60,
};

intro.call(p1, "Delhi", "India");
intro.call(p2, "Mumbai"); // we can send arguments but first argument will be object.
*/

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐9. apply()
/*
function intro(city, country) {
  console.log(
    `my name is ${this.name} and i am ${this.age} years old and i live in ${city} in country ${country}`,
  );
}

let p1 = {
  name: "Amrik",
  age: 55,
};

let p2 = {
  name: "Sukhdev",
  age: 60,
};

intro.apply(p1, ["Delhi", "India"]);
intro.apply(p2, ["Mumbai", "India"]); // we can send arguments but first argument will be object.
*/

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐10. bind()

function intro(city, country) {
  console.log(
    `my name is ${this.name} i am ${this.age} years old i live in ${city} in country ${country}`,
  );
}

let p1 = {
  name: "Amrik",
  age: 55,
};

let p2 = {
  name: "Sukhdev",
  age: 60,
};

let myIntro = intro.bind(p1, "Mumbai", "India");
myIntro();
