// ⭐⭐⭐⭐⭐ Before encapsulation.
/*
class BankAccount {
  constructor(n, bal, p) {
    this.name = n;
    this.balance = bal;
    this.pin = p;
  }

  getBalance() {
    console.log(this.balance);
  }
}

let acc1 = new BankAccount("Shukhdev", 8000, 9661);

acc1.getBalance();

acc1.balance = 9000; // yaha ham acc1 ke balance property ko direct access kar sakte hai. aisa to kam kabhi bhi change kar sakte hai. ye nhi hona chahiye.

//Encapsulation means protecting data from direct access and providing controlled methods to access or modify that data.

// Bas pehle ye concept samajh lo: Direct access ❌ → Controlled access through methods ✅.
acc1.getBalance();
*/

// ⭐⭐⭐⭐⭐ after encapsulation.
// Ab user directly balance change nahi kar sakta. Usse methods ke through hi change karna padega. यही Encapsulation hai.

class BankAccount {
  #balance; // isko private bana diye iss property ko class ke bahar direct access nahi kar sakte, class me kar payege.
  #pin;
  constructor(n, bal, p) {
    this.name = n;
    this.#balance = bal;
    this.#pin = p;
  }

  getBalance() {
    console.log(this.#balance);
  }

  addBalance(pin, amount) {
    if (this.#pin !== pin) {
      console.log("Invalid pin, try again");
      return;
    }
    this.#balance += amount;
    console.log("Amount deposited, balance is :", this.#balance);
  }

  withdraw(pin, amount) {
    if (this.#pin !== pin) {
      console.log("Invalid pin, try again");
      return;
    }
    if (this.#balance < amount) {
      console.log("insufficient balance, your balance is", this.#balance);
    }

    this.#balance -= amount;
    console.log("Amount withdrawn", this.#balance);
  }
}

let acc1 = new BankAccount("Shukhdev", 8000, 123456);
// console.log(acc1);
// acc1.getBalance();

// acc1.#balance = 9000; // yaha access nahi ho paa raha hai. balance class ke bahar.
acc1.getBalance();
acc1.addBalance(123456, 1000);
acc1.withdraw(123456, 100); // ham balance ya pin ko method se hi manipulate kar paa rahe hai. this is encapsulation.
