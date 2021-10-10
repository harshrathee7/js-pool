/*
A Set is a special type collection 
– “set of values” (without keys), 
where each value may occur only once.
*/

// creation

let set = new Set();

let john = { name: "John" };

let pete = { name: "Pete" };

let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

console.log(set.size);

for (let user of set) {
  console.log(user.name);
}

// iterate over the set

let new_set = new Set(["oranges", "apples", "bananas"]);

for (let value of new_set) console.log(value);

new_set.forEach((item) => console.log(item));

console.log(new_set.keys());
console.log(new_set.values());
console.log(new_set.entries());
