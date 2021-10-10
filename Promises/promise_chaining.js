new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})
  .then((result) => {
    console.log(result);
    return result * 2;
  })
  .then((double_result) => {
    console.log(double_result);
    return double_result * 3;
  })
  .then((triplet_result) => {
    console.log(triplet_result);
  });
