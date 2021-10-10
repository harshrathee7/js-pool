// Object references and copying

let user = {
  name: "Alice",
};

let admin = user; // copy the reference

admin.name = "Sumit";

// now user & admin have same name property

console.log(admin.name); // Sumit
console.log(user.name); // Sumit

// Comparision by reference

let a = {};
let b = a;

console.log(a == b); // true
console.log(a === b); // true

let c = {};
let d = {};

console.log(c === d); // false because both have different reference

// Cloning,Merging,Object.assign

let person = {
  name: "John",
  age: 24,
};

let clone = {};

for (let key in person) {
  clone[key] = person[key];
}

// now clone is independent of person

clone.name = "Sumit";

console.log(clone.name);

console.log(person.name);

let user2 = { name: "John" };

let permission1 = { canView: true };
let permission2 = { canEdit: true };

Object.assign(user2, permission1, permission2);

console.log(user2);
