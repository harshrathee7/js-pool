/* Variable: - a container in System memory labeled with some name called
variable name e.g first_name,todo_list which
holding some value using assignment operator
which can be vary


In javascript there are three ways of declaring a variable

1.var :global scope
2.let :localized scope
3.const:a variable which can't be modified after defining

*/

var age = 24; // a variable labeled as age holding number

console.log(age); // 24

age = 25;

console.log(age); // 25
let fname = "Sumit"; // a variable labeled as fname holding a string type
console.log(fname); // sumit

fname = "sammy";
console.log(fname); // sammy
const pi = 3.14; // a constant variable holding PI value which is immutable
