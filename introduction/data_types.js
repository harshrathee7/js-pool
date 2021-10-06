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

// special characters in Strings

console.log('First Line\nSecond Line') // new line char
console.log('First Line \r Second Line')
console.log('Sumit\'s Book') //  Single quote in single quotes
console.log("Sumit\"s Another Book") // Double quote in double quotes

// unicodes or say emojis

console.log("\u00A9")
console.log("\u{2031}")
console.log("\u{1F60D}")

// String methods

// length property gives length of a string

console.log("Sumit".length); // 5

// accessing chars from a string : same like arrays

console.log("Sumit"[0]) // S

// get a character from a position using charAt

console.log("Sumit".charAt(0)) // S

// we can also iterate a string like array using for loops
for(let char of "Sumit"){
    console.log(char)
    /*
S
u
m
i
t
     */
}


// Strings are immutable means we cannot modify there chars or whole string

let my_name = "Sumit"
my_name[0] = "A"
console.log(my_name) // unchanged:-remains Sumit


// Chainging Cases :-upper or lowercase


console.log(my_name.toUpperCase())
console.log(my_name.toLowerCase())

// Search for the substring

console.log("Sumit".indexOf("Su")) // 0

console.log("Sumit".indexOf("am")) // -1











