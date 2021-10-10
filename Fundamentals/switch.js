/*
A switch statement can replace multiple if checks.

It gives a more descriptive 
way to compare a value with multiple variants.
*/

/* Syntax
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
 */

/*Example */

let a = 2 + 2;

switch (a) {
  case 3:
    console.log("Too small");
    break;
  case 4:
    console.log("Exactly");
    break;
  case 5:
    console.log("Too big");
    break;
  default:
    console.log("I don't know such values");
}

// Grouping case
let age = 15;

switch (age) {
  case 12:
    console.log("You are small");
    break;
  case 15:
  case 16:
  case 17:
    console.log("You can able to drive in some year");
    break;
  case 18:
    console.log("Now you can drive");
    break;
  default:
    console.log("I don't know such age values'");
}
