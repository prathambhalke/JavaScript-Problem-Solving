// Write a function that takes two numbers (min and max) as arguments. Return an array of numbers in the range min to max

function generateRange(min, max) {
  let result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  console.log(result);
}

generateRange(3, 8); // Expected [ 3, 4, 5, 6, 7, 8 ]
