// Write a function that takes a number as argument. If the number is even, return true. Otherwise, return false

const isNumEven = (num) => {
  return num % 2 === 0;
};

isNumEven(10); //Expected true
isNumEven(-4); //Expected true
isNumEven(5); //Expected false
isNumEven(-111); //Expected false
