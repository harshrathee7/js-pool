// Garbage Collection

// user has a reference to the object
let user = {
  name: "John",
};

// if the value of the user is overwritten,the reference will be lost

user = null;

console.log(user);

// two reference

user = {
  name: "Alice",
};

let admin = user;

user = null;

console.log(admin);

// Interlinked objects

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;
  return {
    father: man,
    mother: woman,
  };
}

let family = marry(
  {
    name: "John",
  },
  { name: "Alice" }
);

console.log(family);

delete family.father;
delete family.mother;

console.log(family);
