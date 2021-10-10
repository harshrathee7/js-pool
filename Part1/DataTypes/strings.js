/* Strings - In JavaScript String are the collection of 
characters enclosed in single (''),double ("") quotes and template literals
to do string interpolation.
*/

let f_name = "Sumit";
let position = "Full Stack Web Developer";
console.log(f_name);

f_name = "Sumit";

console.log(f_name);

console.log(f_name == "sumit"); // false

/* string interpolation:where we can 
concatenate strings with variables or 
js expression using ${object} enclosed in ``;*/

console.log(`${f_name} is a ${position}`);

// special characters in Strings

console.log("First Line\nSecond Line"); // new line char
console.log("First Line \r Second Line");
console.log("Sumit's Book"); //  Single quote in single quotes
console.log('Sumit"s Another Book'); // Double quote in double quotes

// unicodes or say emojis

console.log("\u00A9");
console.log("\u{2031}");
console.log("\u{1F60D}");

// String methods

// length property gives length of a string

console.log("Sumit".length); // 5

// accessing chars from a string : same like arrays

console.log("Sumit"[0]); // S

// get a character from a position using charAt

console.log("Sumit".charAt(0)); // S

// we can also iterate a string like array using for loops
for (let char of "Sumit") {
  console.log(char);
  /*
S
u
m
i
t
     */
}

// Strings are immutable means we cannot modify there chars or whole string

let my_name = "Sumit";
my_name[0] = "A";
console.log(my_name); // unchanged:-remains Sumit

// Chainging Cases :-upper or lowercase

console.log(my_name.toUpperCase());
console.log(my_name.toLowerCase());

// Search for the substring

console.log("Sumit".indexOf("Su")); // 0

console.log("Sumit".indexOf("am")); // -1

// includes,startswith,endswith : all returns boolean

console.log("sumit".includes("s")); // true
console.log("sumit".startsWith("S")); // false
console.log("sumit".endsWith("T")); // false

// Getting a substring

console.log("sumit".slice(0, 2)); // su
console.log("Sumit".slice(3)); // it
console.log("sumit".substring(0, 3)); // sum
console.log("sumit".substr(0, 3)); // sum

// comparing strings

console.log("a" > "b"); // false
console.log("A" < "B"); // true

// get the code for the char

console.log("abc".codePointAt(0)); // 97

// get the char from the code

console.log(String.fromCharCode(97)); // a
