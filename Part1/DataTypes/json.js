// json methods

// JSON->JAVASCRIPT OBJECT NOTATION typically a js object

let user = {
  name: "Sumit",
  age: 24,
  toString() {
    return `{name: "${this.name}", age: ${this.age}}`;
  },
};

console.log(user);

// Json.stringify

let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  wife: null,
};

let json = JSON.stringify(student);

console.log(json);

console.log(typeof json);

// Json.parse() // take stringify json and convert back to json

let object_json = JSON.parse(json);

console.log(object_json);
