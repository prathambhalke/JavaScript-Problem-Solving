// FindIntersection is a function that takes an array of two sorted lists of comma-separated numbers. The goal is to return a comma-separated string containing the common numbers in sorted order. If there are no common numbers, return "false".

function FindIntersection(strArr) {
  let strArrEle1 = strArr[0].split(",");
  let strArrEle2 = strArr[1].split(",");

  let result = [];

  for (let i = 0; i < strArrEle1.length; i++) {
    for (let j = 0; j < strArrEle2.length; j++) {
      if (strArrEle1[i] === strArrEle2[j]) {
        result.push(strArrEle1[i]);
      }
    }
  }
  return result.join(",");
}

let strArray = ["1,4,6,12", "1,3,5,6,8,12"];
let strArray2 = ["1,4,6,12", ",3,5,8"];

console.log(FindIntersection(strArray)); // return the common elements // 1,6,12
console.log(FindIntersection(strArray2)); // Nothing
