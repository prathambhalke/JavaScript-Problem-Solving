// concatenating two strings

const concatStrings = (string1, string2) => {
  const result1 = string1 + " " + string2;

  const result2 = `${string1}  ${string2}`; // using templete literals

  console.log(result1);

  console.log(result2);
};

let string1 = "hello";
let string2 = "world";

concatStrings(string1, string2);
