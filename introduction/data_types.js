console.log("Numbers start from here")
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



console.log("Numbers Ends here & Strings started")


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


// includes,startswith,endswith : all returns boolean

console.log("sumit".includes("s")) // true
console.log("sumit".startsWith("S")) // false
console.log("sumit".endsWith("T")) // false

// Getting a substring

console.log("sumit".slice(0,2)) // su
console.log("Sumit".slice(3)) // it
console.log("sumit".substring(0,3)) // sum
console.log("sumit".substr(0,3)) // sum

// comparing strings

console.log('a'>'b') // false
console.log('A'<'B') // true


// get the code for the char

console.log("abc".codePointAt(0)) // 97

// get the char from the code

console.log(String.fromCharCode(97)) // a



console.log("Strings Ends here and Arrays start from here")



// Array:-In JS Array can be intialized using [] or Array class


const todo = [] // empty list using []
console.log(todo)
const advance_todo = new Array("eggs","notebook","bananas");

console.log(advance_todo)

// accessing elements from array
console.log(advance_todo[0])

// replacing an element

advance_todo[0] = "Basket Ball"
console.log(advance_todo)

// count of the array or list

console.log(advance_todo.length)

// we can store any type in array

const users = [{name:"Sumit",lname:"Bighaniya"},{name:"Abhishek",lname:"Tiwari"}] // array of objects

const scores = [1,2,3] // array of numbers

const freinds = ["abhishek","rahul","sahil"] // array of strings

const mixed_array = [{name:"sumit"},1,"sammy",false] // mixed type array

console.log({users,scores,freinds,mixed_array})


// methods for Array

// push

advance_todo.push("Badminton")
console.log(advance_todo)
// pop

const deleted_item = advance_todo.pop()

console.log(deleted_item)

// shift:-extract front element or start element

advance_todo.shift()
console.log(advance_todo)

// unshift

advance_todo.unshift("brinjal")

console.log(advance_todo)

// we can add multiple elements using push & unshoft

advance_todo.push("Orange","Grapes")
console.log(advance_todo)

advance_todo.unshift("Beer","Vodka")
console.log(advance_todo)


// arrays use copy be reference means changing duplicate array of one array changes its parent array

const fruits = ["grapes"]

const new_fruits = fruits

console.log(new_fruits===fruits) // true

new_fruits.push("banana")
console.log(new_fruits)
console.log(fruits)

// multidimensional arrays

const matrix = [[1,2,3]
              ,[2,3,4]]


console.log(matrix[0][1]) // 2

// array => strings with comma seperated

let a_list = [1,2,3]
const string_list = a_list.toString()
console.log(string_list) // 1,2,3


// splce: splice an array

let arr = ["I", "go", "home"];

arr.splice(0,1) // remove 1 element from index 0

console.log(arr)

// remove & replace using splice

arr.splice(1,1,"banana","apple")

console.log(arr)

// splice method also return removed elements

let spliced = arr.splice(1,2)
console.log(spliced)

// slice: get a part of array

console.log(["a","b","c","d"].slice(0,2)) // [a,b]

// concat:join or merge two array in one array

let joined_array = [1,2,3].concat([4,5,6,1])

console.log(joined_array)

// forEach:iterate like for loop

joined_array.forEach((item)=>{
    console.log(item)
})


// Searching in Array

console.log(joined_array.indexOf(1)) //0

console.log(joined_array.lastIndexOf(1)) // 6

// includes: detect element in array or not returning boolean


console.log(joined_array.includes(3)) // true

console.log(joined_array.includes(10)) // false

// find and findIndex

// find :- find the element itself from the array

let one = joined_array.find((item)=>item===1) // 1
console.log(one)

let unknown = joined_array.find((item)=>item===10) // undefined
console.log(unknown)


// findIndex:return the index for the searching element
let first_index = joined_array.findIndex((item)=>item===1)


console.log(first_index) // 0



// filtering using filter

let subscribers = [
    {
        name:"Sumit",
        lname:"Bighaniya",
        premium:true
    },
    {
        name:"Abhishek",
        lname:"Tiwari",
        premium:true
    },
    {
        name:"Sahil",
        lname:"Kumar",
        premium:false
    },
    {
        name:"Rahul",
        lname:"Khatri",
        premium:true
    },
]

const premium_users = subscribers.filter((subscriber)=>subscriber.premium)
console.log(premium_users)


// sort:sorting

let unsorted = [3,2,1]
unsorted.sort()

console.log(unsorted)

// reverse

unsorted.reverse()

console.log(unsorted)

// convert comma seperated into array

let names = "sumit,sahil,abhishek"

let names_list = names.split(",")

console.log(names_list)

// reduce:calculate the whole array using accumulator

let budget = [200,300,400]

let total_budget = budget.reduce((acc,item)=>{
    return acc+item
})

//explanation

/**
 * acc=0
 * item = 200
 * result = 0+200=>200
 * acc = 200
 * item = 300
 * result = 200+300
 * acc =500
 * item = 400
 * result = 500+400
 */

console.log(total_budget) //900














