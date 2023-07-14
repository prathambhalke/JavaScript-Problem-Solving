// Write a function that takes a string as argument. Create an object that has a property with key 'key' and a value equal to the string. Return the object.

const createObjectWithString = (str) => {
  let obj = {};
  obj.key = str;
  return obj;

  //!another approch
  //   return {key : a}
};

console.log(createObjectWithString("a")); //Expected {key:'a'}
console.log(createObjectWithString("z")); //Expected {key:'z'}
console.log(createObjectWithString("b")); //Expected {key:'b'}
