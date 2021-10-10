class Animal {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed of ${this.speed}`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stand still`);
  }
}

let animal = new Animal("My Animal");

class Rabbit extends Animal {
  // constructor inheritance

  constructor(name, earcount) {
    super(name);
    this.earcount = earcount;
  }
  hide() {
    console.log(`${this.name} hides`);
  }

  // method override

  stop() {
    super.stop();
    this.hide();
  }
}

let rabbit = new Rabbit("white rabbit", 2);

rabbit.run(5);
rabbit.stop();
console.log(rabbit.earcount);
