// Numbers

let billon = 1000000000;

console.log(billon+1) // 10000000001

// we can also use _ as a seperator

billon = 100_000_000_0
console.log(billon)

billon = 1e9; // we can also use exponentials represent 1+9 zeros

console.log(billon)

let ms = 0.000001;
console.log(ms===1e-6)
ms = 1e-6;
console.log(ms)


// Hex,binary and octal numbers

console.log(0xff)
console.log(0xfff)

// binary 

let a = 0b11111111;
let b = 0o377;
console.log(a==b)


// methods on Numbers

let num  = 255

console.log(num.toString(16)) // ff

console.log(num.toString(2)) // 11111111==binary of 255

console.log(num.toString(36))


// Rounding
console.log(Math.floor(3.5));
console.log(Math.ceil(3.5));

console.log(Math.round(3.5))




/* Strings - In JavaScript String are the collection of 
characters enclosed in single (''),double ("") quotes and template literals
to do string interpolation.
*/

let f_name = 'Sumit';
let position = "Full Stack Web Developer";
console.log(f_name)

f_name = "Sumit"

console.log(f_name)

console.log(f_name =="sumit") // false

/* string interpolation:where we can 
concatenate strings with variables or 
js expression using ${object} enclosed in ``;*/

console.log(`${f_name} is a ${position}`);










