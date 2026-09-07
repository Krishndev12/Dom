class Car {
  constructor(n) {
    this.name = n;
  }

  startCar() {
    this.#injectFuel();
    this.#ingniteEngine();
  }

  #injectFuel() {
    // fuel engine tak pauchane ka kaam start hone se pahle.
    console.log("Fuel injected");
  }

  #ingniteEngine() {
    console.log("Car ignited");
  }
}

const car = new Car("BMW");
car.startCar();
