// promise in JS have to state resolve,reject

//resolve=>successful response
// response with some error or say rejection

/*
syntax:let promise = new Promise((resolve,reject)=>{

    // do something
})
*/

// example

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("done");
  }, 5000);
});

promise
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
