function iterateObjectEntries(obj) {
  const entries = Object.entries(obj);

  entries.forEach(([key, value]) => {
    console.log(`Key: ${key}, Value: ${value}`);
  });
}

const person = {
  name: "John Doe",
  age: 30,
  email: "john@example.com",
};

iterateObjectEntries(person);
/*
  Output:
  Key: name, Value: John Doe
  Key: age, Value: 30
  Key: email, Value: john@example.com
  */
