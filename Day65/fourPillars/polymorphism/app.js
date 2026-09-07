// yahi hai method overriding, jaha har class me same method ka diffrenet kaam hai . and Gparent ke method ko Parent override kar raha hai, Parent ke method ko Child override kar raha hai.

class Gparent {
  constructor(n, a) {
    this.name = n;
    this.age = a;
  }

  greet() {
    console.log("Namste");
  }
}

class Parent extends Gparent {
  constructor(n, a, m) {
    super(n, a);
    this.mobile = m;
  }

  greet() {
    console.log("Hello");
  }
}

class Child extends Parent {
  constructor(n, a, m, l) {
    super(n, a, m);

    this.laptop = l;
  }

  greet() {
    console.log("whatsup");
  }
}

let gP1 = new Gparent("dada Ji", 80);
let p1 = new Parent("papa", 45, "Apple");
let c1 = new Child("beta", 20, "samsung", "Asus Tuf");

console.log(gP1);
console.log(p1);
console.log(c1);

gP1.greet();
p1.greet();
c1.greet(); // yaha jaise ham c1.greet() call kiye to sabse pahle isme c1 yani Child class me check hoga age isme nahi hai to, feer Parent me check hoga agar yaha bhi nahi hai to Gparent me check hoga. kyuki jab ham inherit karte hai to base class ka prototype derive class me hota hai.

// ⭐⭐⭐⭐⭐⭐ why method overloading is not possible in js

function abc() {
  console.log("Hello abc");
}

function abc() {
  console.log("Hello xyz");
}

abc(); // Hello xyz
// kyuki mcp me function ko second function abc replace kar deta hai isiliye function overloading nahi ho pata js me. same name se multiple functions hai to last wala hi chalega.
