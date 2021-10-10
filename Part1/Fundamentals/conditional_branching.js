/* conditional helps us to make descisions or
 logic in our program */

let year = 2019;

year = 2020;
if (year === 2019) {
  console.log("Stay at home it's corona here...");
}
//else if when we have multi checks
else if (year === 2020) {
  console.log(
    "Stay at home beacause it is second wave of Covid here it is too danger"
  );
}
// else do something in case "if" not work
else {
  console.log("Its safe now but make sure you wear mask until all clear");
}

// conditional operator (?) or say ternory operator

const result = 5 > 2 ? true : null;

console.log(result);
