class User {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      return "Make sure your name is at least 4 characters long";
    }

    this._name = value;
  }

  sayHi() {
    console.log(this.name);
  }
}

user = new User("sumit");

user.sayHi();

// console.log(typeof User);

// getter & setters

user2 = new User("");
