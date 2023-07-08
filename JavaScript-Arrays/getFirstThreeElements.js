// Write a function that takes an array (a) as argument. Extract the first 3 elements of a. Return the resulting array

const getFirstThreeElements = (a) => {
  console.log(a.slice(0, 3));
};

getFirstThreeElements([1, 2, 3, 4]); //Expected [1,2,3]
getFirstThreeElements([5, 4, 3, 2, 1, 0]); //Expected [5,4,3]
getFirstThreeElements([99, 1, 1]); //Expected [99,1,1]
