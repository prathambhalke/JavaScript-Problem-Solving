// Write a function that takes an array (a) and a value (n) as arguments. Save every nth element in a new array. Return the new array

const saveEveryNthElement = (arr, n) => {
  let result = [];
  for (let i of arr) {
    if (i % n === 0) {
      result.push(i);
    }
  }
  console.log(result);
};
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const n = 5;

saveEveryNthElement(arr, n);
