// static properties
/* when we declare a property of
 a class outside of its prototype
that property are said to be 
static for a class*/

class User {
  static staticMethod() {
    console.log(this == User);
  }
}

User.staticMethod();

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JAVASCRIPT", new Date(2019, 11, 1)),
];

articles.sort(Article.compare);

console.log(articles[0].title);

class Person {
  static name = "John";
}

console.log(Person.name);

// inheritance of static properties & methods

class Animal {
  static planet = "Earth";

  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  run(speed = 0) {
    this.speed += speed;
    console.log(`${this.name} runs with the  ${speed}`);
  }

  static compare(a, b) {
    return a.speed - b.speed;
  }
}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} can hide`);
  }
}

let rabbits = [new Rabbit("white rabbit", 10), new Rabbit("black rabbit", 5)];

rabbits.sort(Rabbit.compare);

rabbits[0].run();
console.log(Rabbit.planet);
