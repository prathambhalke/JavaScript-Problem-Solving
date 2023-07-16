const replaceEmptyStringsWithNull = (obj) => {
  const result = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      result[key] = value.trim() === "" ? null : value;
    }
  }

  return result;
};

const person = {
  name: "John Doe",
  age: 30,
  email: "",
  address: "   ",
  city: "New York",
};

const updatedPerson = replaceEmptyStringsWithNull(person);

console.log(updatedPerson);
/*
  Output:
  {
    name: 'John Doe',
    age: 30,
    email: null,
    address: null,
    city: 'New York'
  }
  */
