/*
{Currying} is an advanced technique of
 working with functions. It’s used not only in 
JavaScript, but in other languages as well. 

*/

// e.g

/**
 * Currying is a transformation of functions
 * that translates a function from
 *  callable as f(a, b, c) into callable as f(a)(b)(c)
 */

function curry(f) {
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

// usage
function sum(a, b) {
  return a + b;
}
let curriedSum = curry(sum);

console.log(curriedSum(10)(20)); // 30
