// Write a function that takes two objects as arguments. Unfortunately, the property 'b' in the second object has the wrong key. It should be named 'd' instead. Merge both objects and correct the wrong property name. Return the resulting object. It should have the properties 'a', 'b', 'c', 'd', and 'e'

function mergeObjWithMatchingKeys(x, y) {
  const mergedObj = { ...x, ...y };
  const { b, ...rest } = mergedObj;
  const correctedObj = { ...rest, d: b };
  return { ...x, ...y, ...correctedObj };
}

console.log(mergeObjWithMatchingKeys({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
//Expected { a: 1, b: 2, c: 3, e: 5, d: 4}
console.log(mergeObjWithMatchingKeys({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));
//Expected { a: 5, b: 4, c: 3, e: 2, d: 1}
