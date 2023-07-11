// Write a function that takes an array (a) and a number (b) as arguments. Sum up all array elements with a value greater than b. Return the sum

const sumGreaterThanB = (a, b) => {
  let numsGreaterThanB = a.filter((item) => item > b);
  let sum = numsGreaterThanB.reduce((acc, curr) => acc + curr);
  console.log(sum);
};

sumGreaterThanB([1, 2, 3, 4, 5, 6, 7], 3); //Expected 18
