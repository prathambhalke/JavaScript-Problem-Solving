// Write a function that takes an object as argument. Somehow, the properties and keys of the object got mixed up. Swap the Javascript object's key with its values and return the resulting object

function swapObjectKeysAndValues(obj) {
    const swappedObject = {};
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        swappedObject[value] = key;
      }
    }
  
    return swappedObject;
  }

  const obj = { a: 1, b: 2, c: 3 };

const swappedObject = swapObjectKeysAndValues(obj);
console.log(swappedObject);