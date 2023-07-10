// Write a function that takes an array of numbers as argument. It should return the average of the numbers.

const averageArray = (array) => {
  const sum = array.reduce((acc, curr) => acc + curr, 0);

  const res = sum / array.length;

  console.log(res);
};

averageArray([10, 100, 40]); //Expected 50
averageArray([10, 100, 1000]); //Expected 370
averageArray([-50, 0, 50, 200]); //Expected 50
