// Merge two arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];

// Initialize the sum variable
let sum = 0;

// Iterate through the merged array and calculate the sum
for (const element of mergedArray) {
  sum += element;
}

// Print the sum
console.log("The sum of the merged array is:", sum);
