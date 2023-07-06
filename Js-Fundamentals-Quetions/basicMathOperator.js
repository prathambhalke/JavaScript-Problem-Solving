// Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c. Then multiply by d and divide by e. Finally raise to the power of f and return the result. Tipp: mind the order.

const basicMathOperator = (a, b, c, d, e, f) => {
  var result = Math.pow(((a + b - c) * d) / e, f);
  return result;
};

basicMathOperator(6, 5, 4, 3, 2, 1); //Expected 10.5
basicMathOperator(6, 2, 1, 4, 2, 3); //Expected 2744
basicMathOperator(2, 3, 6, 4, 2, 3); //Expected -8
