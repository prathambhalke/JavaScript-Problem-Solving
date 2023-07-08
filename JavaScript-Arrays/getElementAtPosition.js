// Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'

const getElementAtPosition = (a, n) => {
  console.log(a[n - 1]);
};

getElementAtPosition([1, 2, 3, 4, 5], 3); //Expected 3
getElementAtPosition([10, 9, 8, 7, 6], 5); //Expected 6
getElementAtPosition([7, 2, 1, 6, 3], 1); //Expected 7
