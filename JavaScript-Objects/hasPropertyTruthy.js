// Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b', but only if it has a truthy value. In other words, it should not be null or undefined or false. Return false otherwise.

function hasPropertTruthy(a, b) {
  console.log(Boolean(a[b]));
}

hasPropertTruthy({ a: 1, b: 2, c: 3 }, "b"); //Expected true
hasPropertTruthy({ x: "a", y: null, z: "c" }, "y"); //Expected false
hasPropertTruthy({ x: "a", b: "b", z: undefined }, "z"); //Expected false
