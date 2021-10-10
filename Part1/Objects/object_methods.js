"use strict";
// Object methods

let user = {
  name: "John",
  age: 30,
};

user.sayHi = function () {
  console.log("Hello");
};

user.sayHi();

// this in methods

let person = {
  name: "Sumit",
  age: 24,
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
};

person.sayHi();

// We can even call the function without an object at all

function sayHello() {
  console.log(this);
}

sayHello();

// arrow function not have this

const u = {
  name: "Sumit",
  sayHi: () => {
    console.log(this.name); // undefined
  },
};

u.sayHi();
