// Write a function that takes an object as argument containing properties with personal information. Extract firstName, lastName, size, and weight if available. If size or weight is given transform the value to a string. Attach the unit cm to the size. Attach the unit kg to the weight. Return a new object with all available properties that we are interested in

const extractPersonalInfo = (Obj) => {
  const { firstName, lastName, size, weight } = Obj;

  const result = {};

  if (firstName) {
    result.firstName = firstName;
  }

  if (lastName) {
    result.lastName = lastName;
  }

  if (size !== undefined) {
    result.size = `${size}cm`;
  }

  if (weight !== undefined) {
    result.weight = `${weight}kg`;
  }

  return result;
};

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  size: 180,
  weight: 75,
};

const personalInfo = extractPersonalInfo(person);

console.log(personalInfo);
/*
  Output:
  {
    firstName: 'John',
    lastName: 'Doe',
    size: '180cm',
    weight: '75kg'
  }
  */
