// Write a function that takes an object (a) and a number (b) as arguments. Multiply all values of 'a' by 'b'. Return the resulting object.

const multiplyObjectValues = (a, b) => {
  const multipliedObject = {};

  for (const key in a) {
    if (a.hasOwnProperty(key)) {
      multipliedObject[key] = a[key] * b;
    }
  }

  return multipliedObject;
};

console.log(multiplyObjectValues({ a: 1, b: 2, c: 3 }, 3)); //Expected {a:3,b:6,c:9}
console.log(multiplyObjectValues({ j: 9, i: 2, x: 3, z: 4 }, 10)); //Expected {j:90,i:20,x:30,z:40}
console.log(multiplyObjectValues({ w: 15, x: 22, y: 13 }, 6)); //Expected {w:90,x:132,y:78}
