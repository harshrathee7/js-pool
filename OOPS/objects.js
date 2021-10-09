// Objects: In JavaScript,Objects are come with a Key value pair

let user = {
  name: "Sumit",
  age: "24",
  city: "Bangalore",
};

// we can declare a object using Object Class

let person = new Object({
  name: "Abhishek",
  age: "21",
  city: "Kolkata",
});

// accessing properties of the object

console.log(user.name, user.age);

// accessing properties f object using (.) operator

console.log(user["name"], user["age"]);
// access properties using ['key'] braces by giving key_name as param

// assigning properties to object

user.position = "Web Developer";

console.log(
  `${user.name} is ${user.age} years old currently in ${user.city} is a ${user.position}`
);

// delete or remove a property of the the object

delete user.age;

console.log(user["age"]); // undefined

/* we can also use multi-word 
keyname for a object but make
 user they are enclosed 
 in "" or '' */

user["year old"] = 24;
console.log(user["year old"]); // 24

// but key name having multi-word cannot be access by using (.) operator

//console.log(user.year old)// giving error

// check property exixtence using in opeartor

console.log("age" in person); // true

console.log("name" in person); // true
