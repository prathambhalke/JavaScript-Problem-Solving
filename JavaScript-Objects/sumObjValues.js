// Write a function that takes an object (a) as argument. Return the sum of all object values.

function sumObjValues(a) {
  return Object.values(a).reduce((acc, curr) => acc + curr);

  //! another approch
  //?   let sum = 0;
  //?   for (let key in a) a.hasOwnProperty(key) && (sum += a[key]);
  //?   return sum;
}

console.log(sumObjValues({ a: 1, b: 2, c: 3 })); //Expected 6
console.log(sumObjValues({ j: 9, i: 2, x: 3, z: 4 })); //Expected 18
console.log(sumObjValues({ w: 15, x: 22, y: 13 })); //Expected 50
