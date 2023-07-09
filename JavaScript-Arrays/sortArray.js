// Write a function that takes an array of strings as argument. Sort the array elements alphabetically. Return the result.

const sortArray = (array) => {
  console.log(array.sort());
};

//! test cases
sortArray(["b", "c", "d", "a"]); //Expected ['a', 'b', 'c', 'd']
sortArray(["z", "c", "d", "a", "y", "a", "w"]); //Expected ['a', 'a', 'c', 'd', 'w', 'y', 'z']
