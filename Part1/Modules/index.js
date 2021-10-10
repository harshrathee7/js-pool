/*A module is just a file. 
One script is one module. As simple as that.*/

// exports: keyword to export the variable,function etc to the other modules(files)

// import: keyword to import the variable,function etc from other modules(files)

import { sayHi } from "./say_hello.js";
import { admin } from "./admin.js";
sayHi("Sumit");
console.log(admin);
