/* In JavaScript, we can access date & time using 
Date constructor*/

// creation

const date = new Date();
console.log(date);

// date string

let d = new Date("2022-01-26");

console.log(d);

// access date components

console.log(new Date().getFullYear());
console.log(new Date().getMonth());
console.log(new Date().getDate());
console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(new Date().getSeconds());
console.log(new Date().getMilliseconds());

console.log(new Date().getDay());

console.log(new Date().getUTCHours());

console.log(new Date().getTime());

// setting date components

const today = new Date();

console.log(today);
today.setHours(8);
console.log(today);

// date to number

console.log(+new Date()); // same as new Date().getTime()
