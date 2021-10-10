// syntax

/*
try{
// do what we want to execute
}
catch(err){
    //handle error
}
 */

try {
  console.log("Start of try runs"); // (1) <--

  // ...no errors here

  console.log("End of try runs"); // (2) <--
} catch (err) {
  console.log("Catch is ignored, because there are no errors"); // (3)
}

try {
  console.log("Start of try runs"); // (1) <--

  lalala; // error, variable is not defined!

  console.log("End of try (never reached)"); // (2)
} catch (err) {
  console.log(`Error has occurred!`); // (3) <--
}

// error object

try {
  console.log("statement intiations");
  lalala;
} catch (err) {
  console.log(err.message);
}

// Throwing own errors using Throw operator

// syntax:Throw <error object>

// let error = new Error("There is a error");

// let error2 = new SyntaxError("This is an syntax Error");

// let error3 = new ReferenceError("This is a reference Error");

// console.error(error, error2, error3);

// finally keyword much like default in switch statement

try {
  lalala;
} catch (e) {
  console.log(e.message);
} finally {
  console.log("Finally always running");
}
