/* function:- when we have multiple statements
 to execute multiple times we enclosed this multiple statements
 in a block called a function
 */

// in javascript we declare function using function keyword

// syntax

/* 
 function <function name>(<...params>:optional){
     //block statement comes here
 }
 */

// e.g

function sayHi() {
  console.log("Hello User!");
}

/* function call:when we want to execute a block or function
then we need to call that function using function name using parenthesis
*/

sayHi();

// function with params

/*
syntax: function <func_name>(param1,param2,...){
    // block statements
}
 */

function greet(fname, lname) {
  console.log(`${fname}, Welcome ${lname} to Js-Pool`);
}

greet("Sumit");

// local variables

function sayHello() {
  let name = "Sumit";
  console.log(`Hello ${name}`);
}

sayHello();

// if we want to access name of the local scope it gives error on global scope

// console.log(name); // error occur

// Outer Variable or global variable

let age = 24;

function printAge() {
  // a function can access global variable in local scope
  console.log("Your age is: " + age);
}

printAge();

// default values

function my_func(age = 23) {
  console.log("Your age is: " + age);
}

my_func();
my_func(24);
my_func(26);

// return a value from a function

let myAge = 36;
function modifyAge(newAge) {
  myAge = newAge;
  return myAge;
}

const modified_age = modifyAge(37);
console.log(`New age => ${modified_age}`);

// in modern JS we got another form of function called arrow function

/* Syntax

const func_name = (<...params>)=>{
    block statements
}
 */

// arrow function when we have only single statement to execute

const func1 = () => console.log("Single statement arrow function");

// arrow function when we  have only one  param

const func2 = (user) => console.log("Hello ", user);

// arrow function we have have single return statement we can ommit return keyword

const func3 = (name) => "hello " + name;

// arrow function when we have multiple params & multiple statements

const func4 = (name, age) => {
  console.log("Hello " + name + " Your age is " + age);
};

func1();
func2("sammy");
console.log(func3("sumit"));
func4("sumit", 24);
