// Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array

const removeLastThreeElements = (a, n) => {
  console.log(a.slice(-3));
};

removeLastThreeElements([1, 2, 3, 4]); //Expected [2,3,4]
removeLastThreeElements([5, 4, 3, 2, 1, 0]); //Expected [2,1,0]
removeLastThreeElements([99, 1, 1]); //Expected [99,1,1]
