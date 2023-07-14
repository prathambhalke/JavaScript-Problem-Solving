// Write a function that takes an object (a) as argument. Return an array with all object keys.

const objToArr = (a) => {
  let result = [];
  for (key in a) {
    result.push(key);
  }
  return result;

  // ! Another approch
  //   return Object.keys(a);
};

console.log(objToArr({ a: 1, b: 2, c: 3 })); //Expected ['a','b','c']
console.log(objToArr({ j: 9, i: 2, x: 3, z: 4 })); //Expected ['j','i','x','z']
console.log(objToArr({ w: 15, x: 22, y: 13 })); //Expected ['w','x','y']
