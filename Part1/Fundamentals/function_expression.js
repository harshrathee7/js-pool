/*
when we assign a function declaration inside a regular js variable
then it is said to be a functional expression.
 */

const sayHi = function () {
  console.log("Hi User!");
};

sayHi();

// callback functions

function ask(question, yes, no) {
  if (question) {
    yes();
  } else {
    no();
  }
}

function showOk() {
  console.log("You agreed!");
}

function showCancel() {
  console.log("You canceled the execution.");
}

ask(true, showOk, showCancel);
ask(false, showOk, showCancel);
