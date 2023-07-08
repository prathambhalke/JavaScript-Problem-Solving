// Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result

function removeFirstThreeElements(a) {
  console.log(a.slice(3));
}

// ! Test cases
removeFirstThreeElements([1, 2, 3, 4]); //Expected [4]
removeFirstThreeElements([5, 4, 3, 2, 1, 0]); //Expected [2,1,0]
removeFirstThreeElements([99, 1, 1]); //Expected []
