// Write a function that takes an array (a) and a number (n) as arguments. It should return the last n elements of a.

const getLastNElement = (a,n) => {
    console.log(a.slice(-n))
};

getLastNElement([1, 2, 3, 4, 5], 2); //Expected [ 4, 5 ]
getLastNElement([1, 2, 3], 6); //Expected [ 1, 2, 3 ]
getLastNElement([1, 2, 3, 4, 5, 6, 7, 8], 3); //Expected [ 6, 7, 8 ]
