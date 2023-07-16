// ! Write a function that takes an array of numbers as argument. Convert the array to an object. It should have a key for each unique value of the array. The corresponding object value should be the number of times the key occurs within the array.

const convertArrayToObject = (array) => {
  return array.reduce((Obj, num) => {
    Obj[num] = Obj[num] ? Obj[num] + 1 : 1;
    return Obj;
  }, {});

  //? Another approch
  //   let Obj = {};

  //   for (var i = 0; i < array.length; i++) {
  //     let key = array[i];

  //     // Obj[key] ? Obj[key] +=1 : Obj[key] = 1
  //     if (Obj[key]) {
  //       Obj[key] += 1;
  //     } else {
  //       Obj[key] = 1;
  //     }
  //   }
  //   return Obj;
};

const numbers = [1, 2, 3, 2, 1, 2, 3, 4, 5, 4, 3];
const result = convertArrayToObject(numbers);

console.log(result);
// Output: {1: 2, 2: 3, 3: 3, 4: 2, 5: 1}
