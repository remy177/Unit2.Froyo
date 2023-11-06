// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter your froyo order:",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee,vanilla"
);

// Split the string of numbers into an array of strings.
const orderArray = userInputString.split(",");

const order = {};

for (const froyo of orderArray) {
  // If current exists as a key in object, add 1 to count
  if (froyo in order) {
    //console.log("element exist... increment counter");
    order[froyo] += 1;
  } else {
    // add as a key and set count to 1
    //console.log("adding element...");
    order[froyo] = 1;
  }
}

console.log(`You order total of ${getLength(orderArray)} froyo(s) as seen in table below:`);
console.table(order);

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(orderArray) {
  return orderArray.length;
}



