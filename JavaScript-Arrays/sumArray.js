// Write a function that takes an array of numbers as argument. It should return the sum of the numbers.

const sumArray = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum);
};

//! Another approch

// const sumArray = (array) => {
//     console.log(array.reduce((acc, curr) => acc + curr));
// };

sumArray([10, 100, 40]); //Expected 150
sumArray([10, 100, 1000, 1]); //Expected 1111
sumArray([-50, 0, 50, 200]); //Expected 200
