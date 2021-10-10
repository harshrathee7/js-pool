/*callback: is a function passed to a 
function as an argument called 
a callabck function */

const greet = (callback) => {
  callback();
};

const sayHi = () => {
  console.log("hI");
};

greet(sayHi);

// Pyramid of DOOM

/*
when we pass a function to a function as an argument again & again callbacks in callbacks 
this will form a Pyramid structure in a function of the code
that structure is called a pyramid of doom
*/
