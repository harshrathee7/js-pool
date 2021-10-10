// async/await

/*
There’s a special syntax to work with
 promises in a more comfortable fashion,
  called “async/await”.
 It’s surprisingly easy to understand and use.
 */

// async functions

/*
 Let’s start with the async keyword. 
 It can be placed before a function, like this:
  */

import axios from "axios";

async function f() {
  return 1;
}

// adding async before the function means it return a promise

f().then((result) => {
  console.log(result);
});

// Await

//The syntax:

// let value = await Promise;

async function f2() {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(resolve("done!"), 1000);
  });

  let result = await promise;

  console.log(result);
}

f2();

// error handling

async function getGithubUser(username) {
  try {
    const r = await axios.get(`https://api.github.com/users/${username}`);
    return r.data;
  } catch (e) {
    return e;
  }
}

getGithubUser("Ammyy9908")
  .then((response) => {
    const { login } = response;
    console.log(`Welcome ${login}`);
  })
  .catch((e) => {
    console.log(e);
  });
