/*
// ⭐⭐⭐⭐⭐⭐⭐⭐ single level
// Super Class (Parent class) , Base class
class Parent {
  constructor(n, a) {
    this.name = n;
    this.age = a;
  }

  speak() {
    console.log(`hello`);
  }
}

let p1 = new Parent("Papa", 44);
console.log(p1);

// derived Class (Child class), Subclass
class Child extends Parent {
  constructor(n, a, m) {
    // jo parent ka chahiye wo likh lo feer jo isme extra chahiye.
    super(n, a); // derived class ke constructor ke andar ham super keyword call karte hai ye ekk function hai. ye parent ke constructor ko point karta hai.

    this.mobile = m; // ye extra me jo child ka hai.
  }
}

let c1 = new Child("shubhu", 21, "Apple"); // order same hona jaruri hai. otherwise diifernet keys me differnet value ho jayegi set.
c1.speak(); // easily parent ke method ko ham use kar pate hai due to inheritance. aisa isiliye hota hai kyuki parent ka prototype child me present hota hai, child ka prototype grandChild me present hota hai.
console.log(c1);

*/

/*
// ⭐⭐⭐⭐⭐⭐⭐⭐ multi-level inheritance

class Parent {
  constructor(n, a) {
    this.name = n;
    this.age = a;
  }
}

class Child extends Parent {
  constructor(n, a, m) {
    super(n, a);
    this.mobile = m;
  }
}

class Gchild extends Child {
  // ye child ke property use kar sakta hai but child to parent ka use kar sakta hai. isiliye Gchild bhi parent ka property use kar sakta hai kyuki Parent ki saari property Child use kar sakta hai.

  constructor(n, a, m, c) {
    super(n, a, m);
    this.cycle = c;
  }
}

let p1 = new Parent("papa", 40);
let c1 = new Child("motu", 21, "Apple");
let gC1 = new Gchild("chhotu", 12, "Samsung", "ranger");
console.log(p1);
console.log(c1);
console.log(gC1);
*/

// ⭐⭐⭐⭐⭐⭐⭐⭐ hierarchical inheritance

class Parent {
  constructor(n, a) {
    this.name = n;
    this.age = a;
  }
}

class Child extends Parent {
  constructor(n, a, m) {
    super(n, a);
    this.mobile = m;
  }
}

class Gchild extends Parent {
  constructor(n, a, c) {
    super(n, a);
    this.cycle = c;
  }
}

let p1 = new Parent("papa", 40);
let c1 = new Child("chhotu", 20, "Apple");
let gC1 = new Gchild("motu", 12, "ranger");

console.log(p1);
console.log(c1);
console.log(gC1);
