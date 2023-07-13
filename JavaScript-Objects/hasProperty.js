// Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b'. Return false otherwise. Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined. But the property itself exists.

function hasProperty(a, b) {
  console.log(a.hasOwnProperty(b));
}

hasProperty({ a: 1, b: 2, c: 3 }, "b"); //Expected true
hasProperty({ x: "a", y: "b", z: "c" }, "a"); //Expected false
hasProperty({ x: "a", y: "b", z: undefined }, "z"); //Expected true
