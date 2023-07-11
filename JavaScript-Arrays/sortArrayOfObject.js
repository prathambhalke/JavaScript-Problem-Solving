// Write a function that takes an array of objects as argument. Sort the array by property b in ascending order. Return the sorted array

const sortArrayOfObject = (array) => {
  const res = array.sort((a, b) => a.b - b.b);
  console.log(res);
};

sortArrayOfObject([
  { a: 1, b: 2 },
  { a: 5, b: 4 },
]); //Expected [{a:1,b:2},{a:5,b:4}]
