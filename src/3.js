// A simple function that takes in an array of numbers and returns the sum of those numbers
const getSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

// Example usage of the function
console.log(getSum([1, 2, 3])); // Output: 6
