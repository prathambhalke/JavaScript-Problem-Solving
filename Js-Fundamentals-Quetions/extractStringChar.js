// Write a function that takes a string (a) as argument. Extract the first half a. Return the result

const extractStringChar = (str) => {
    console.log(str.slice(0,str.length/2))
};

extractStringChar("abcdefgh"); //Expected 'abcd'
extractStringChar("1234"); //Expected '12'
extractStringChar("gedcba"); //Expected 'ged'
