/*
Function getRandomElementFromArray() FIRST checks if the input
is an Array. 
If yes, it takes a Random element from the Array and returns it.
*/

var input = [3, "hello", 77, true, { name: "alex", surname: "rocchi" }];
var randomIndex;

function getRandomElementFromArray(x) {
  //Check if input is an array
  if (Array.isArray(x) == true) {
    randomIndex = Math.floor(Math.random() * x.length); //Here I generate a a random number between O and the array length
    return x[randomIndex];
  } else {
    return "The given element is not an Array. Cannot proceed";
  }
}

console.log(getRandomElementFromArray(input));
