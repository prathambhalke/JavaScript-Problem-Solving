// Write a function that takes an object as argument. In some cases the object contains other objects with some deeply nested properties. Return the property 'b' of object 'a' inside the original object if it exists. If not, return undefined

const getPropertyB = (obj) => {
  console.log(obj?.a?.b ?? undefined);
};

getPropertyB({ a: 1 }); //Expected undefined
getPropertyB({ a: { b: { c: 3 } } }); //Expected {c:3}
getPropertyB({ b: { a: 1 } }); //Expected undefined
getPropertyB({ a: { b: 2 } }); //Expected 2
