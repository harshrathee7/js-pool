// Higher Order Functions

/*
Basically, a function which takes another function as an argument or returns a function is known as a higher order function
*/


//1.reduce()

/*
The .reduce() method iterates through an array and returns a single value.
*/

const arrayOfNumbers = [1, 2, 3, 4];

const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {  
  return accumulator + currentValue;
});

console.log(sum); // 10

//2.forEach()

/*
The .forEach() method executes a callback function on each of the elements in an array in order.
*/


const numbers = [28, 77, 45, 99, 27];

numbers.forEach(number => {  
  console.log(number);
}); 

/*
3.filter()

The .filter() method executes a callback function on each element in an array. 
The callback function for each of the elements must return either true or false.
The returned array is a new array with any elements for which the callback function returns true.
*/

const randomNumbers = [4, 11, 42, 14, 39];
const filteredArray = randomNumbers.filter(n => {  
  return n > 5;
});


/*
4.map()

The .map() method executes a callback function on each element in an array.
It returns a new array made up of the return values from the callback function.
*/

const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];

// add string after each final participant
const announcements = finalParticipants.map(member => {
  return member + ' joined the contest.';
})

console.log(announcements);



