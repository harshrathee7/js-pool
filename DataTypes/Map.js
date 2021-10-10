/* Map:is a collection of keyed data items,
 just like an Object. But the main difference
  is that Map allows keys of any type*/

// creation

let map = new Map();

map.set("1", "str1");
map.set(1, "num1");
map.set(true, "bool1");

console.log(map);
console.log(map.get("1"));
console.log(map.get(true));
console.log(map.size);

// Map can also use objects as keys

let john = { name: "Sumit" };

let visitsCountMap = new Map();

visitsCountMap.set(john, 123);

console.log(visitsCountMap.get(john));

// chaining

map.set("1", "str1").set(1, "num1").set(true, "bool1");

console.log(map);

// Iterate over a map

let recipieMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

// iterate over keys

for (let veg of recipieMap.keys()) {
  console.log(veg);
}

// iterate over the values

for (let amount of recipieMap.values()) {
  console.log(amount);
}

// iterate over [key,values]

for (let entry of recipieMap) {
  console.log(entry);
}
