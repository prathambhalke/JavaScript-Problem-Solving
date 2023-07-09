// Write a function that takes an array of numbers as argument. Return the number of negative values in the array.

const countNegativeValues = (array) => {
  let count = 0;
  array.forEach((item) => {
    if (item < 0) {
      count++;
    }
  });
  console.log(count);

  //! another approch
  //   const res = array.filter((el) => el < 0).length;
  //   console.log(res)
};

countNegativeValues([1, -2, 2, -4]); //Expected 2
countNegativeValues([0, 9, 1]); //Expected 0
countNegativeValues([4, -3, 2, 1, 0]); //Expected 1
