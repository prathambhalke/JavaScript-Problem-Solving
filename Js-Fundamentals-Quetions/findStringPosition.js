// Write a function that takes a string as argument. The string contains the substring 'is'. Return the index of 'is'

const findStringPosition = (str) => {
  return str.indexOf("is");
};

findStringPosition("praise"); //Expected 3
findStringPosition("risky"); //Expected 1
findStringPosition("paris"); //Expected 3
