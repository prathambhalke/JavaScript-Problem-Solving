// Write a function that takes an object as argument. It should return an object with all original object properties. except for the property with key 'b'

function removeSpecificPropOfObj(obj) {
  //! 1st approch
  // delete obj.b;
  // return obj;

  //! 2nd approch
  // const { b, ...rest } = obj;
  // return rest;

  //! 3rd approch
  let result = {};
  Object.keys(obj).forEach((key) => {
    if (key !== "b") {
      result[key] = obj[key];
    }
  });
  return result;
}

console.log(removeSpecificPropOfObj({ a: 1, b: 7, c: 3 })); //Expected { a: 1, c: 3 }
console.log(removeSpecificPropOfObj({ b: 0, a: 7, d: 8 })); //Expected { a: 7, d: 8 }
console.log(removeSpecificPropOfObj({ e: 6, f: 4, b: 5, a: 3 })); //Expected { e: 6, f: 4, a: 3 }
