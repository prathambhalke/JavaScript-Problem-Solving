// Write a function that takes two arrays (a and b) as arguments. Create an object that has properties with keys 'a' and corresponding values 'b'. Return the object.

const createObjectWithStrings3 = (a, b) => {
  let obj = {};
  for (let i = 0; i < a.length; i++) {
    obj[a[i]] = b[i];
  }
  return obj;
};

console.log(createObjectWithStrings3(["a", "b", "c"], [1, 2, 3]));
//Expected {a:1,b:2,c:3}
console.log(createObjectWithStrings3(["w", "x", "y", "z"], [10, 9, 5, 2]));
//Expected {w:10,x:9,y:5,z:2}
console.log(createObjectWithStrings3([1, "b"], ["a", 2]));
//Expected {1:'a',b:2}
