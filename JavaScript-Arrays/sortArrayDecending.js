// Write a function that takes an array of numbers as argument. It should return an array with the numbers sorted in descending order.

const sortArrayDecending = (arr) => {
  const res = arr.sort((a, b) => b - a);
  console.log(res);
};

sortArrayDecending([1, 3, 2]); //Expected [3,2,1]
sortArrayDecending([4, 2, 3, 1]); //Expected [4,3,2,1]
