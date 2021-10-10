// Destructuring assignment

/*
Destructuring assignment is
 a special syntax that allows us
  to “unpack” arrays or objects into a bunch of 
variables, as sometimes that’s more convenient.
 */

// Array destructuring or array unpacking

let arr = ["John", "Smith"];

let [firstName, lastName] = arr;

console.log(`${firstName} ${lastName}`);

let [fname, lname] = "John Smith".split(" ");

console.log(`${fname} ${lname}`);

// ingore elemets using extra comma

// second element is not needed
let [f_name, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(f_name, title);

// assignment

let user = {};

[user.name, user.age] = ["Sumit", 24];

console.log(user);

// swap Variables

let guest = "Jane";
let admin = "Pete";

[guest, admin] = [admin, guest];

console.log(guest, admin);

// the rest opertor (...)

let [name1, name2, ...rest] = ["sumit", "ankit", "abhishek", "sahil"];

console.log(rest);

// Default values

let [f, l] = [];

console.log(f, l); // undefined

[f = "sumit", l = "kumar"] = [];

console.log(f, l); // sumit kumar

// Object Destructuring

// syntax:let {var1, var2} = {var1:…, var2:…}

let options = {
  topic: "menu",
  width: 100,
  height: 200,
};

let { topic, width, height } = options;

console.log(topic, width, height);

// Nested Destructuring

/*
If an object or an array contain other 
nested objects and arrays, we can use more complex 
left-side patterns to extract deeper portions
*/

let option = {
  size: {
    w: 100,
    h: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

// destructuring assignment split in multiple lines for clarity
let {
  size: {
    // put size here
    w,
    h,
  },
  items: [item1, item2], // assign items here
  _title = "Menu", // not present in the object (default value is used)
} = option;

console.log(_title); // Menu
console.log(w); // 100
console.log(h); // 200
console.log(item1); // Cake
console.log(item2); // Donut
