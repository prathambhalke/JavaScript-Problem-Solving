// Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array. Return the filtered array.

const removeArrElement = (a, b) => {
  const res = a.filter((item) => item !== b);
  console.log(res);
};

removeArrElement([1, 2, 3], 2); //Expected [1, 3]
removeArrElement([1, 2, "2"], "2"); //Expected [1, 2]
removeArrElement([false, "2", 1], false); //Expected ['2', 1]
removeArrElement([1, 2, "2", 1], 1); //Expected [2, '2']
