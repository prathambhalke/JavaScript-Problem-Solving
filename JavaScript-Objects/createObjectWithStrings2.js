// Write a function that takes two strings (a and b) as arguments. Create an object that has a property with key 'a' and a value of 'b'. Return the object.

const createObjectWithStrings2 = (a, b) => {
  return { [a]: b };
};

console.log(createObjectWithStrings2("a", "b")); //Expected {a:'b'}
console.log(createObjectWithStrings2("z", "x")); //Expected {z:'x'}
console.log(createObjectWithStrings2("b", "w")); //Expected {b:'w'}
