function hasTargetSum(array, target) {
  const seenNumbers = {};

  for (const number of array) {
    const complement = target - number;
    if (seenNumbers[complement]) return true;
    seenNumbers[number] = true 
  }

  return false;
 }


/* 
  Write the Big O time complexity of your function here
  runtime: O(n^2)
  space: O(n)
*/

/* 
  create an object to keep track of numbers we've already seen
   iterate through each number in the array 
    for the curent num, identify complement that adds to the target(comp = target -num)
      check if any key on our object is the complement
      if so return true
      otherwise, add that numbet to the object
    if I reach the end of the array, return false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
