// Write a function that takes two numbers (a and b) as argument. Return b percent of a

const calculatePercentage = (a,b) => {
    console.log((a * b)/100)
};

calculatePercentage(100, 50); //Expected 50
calculatePercentage(10, 1); //Expected 0.1
calculatePercentage(500, 25); //Expected 125
