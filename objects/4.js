let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: function greet(greetedPerson) {
    console.log(`Hej, ${greetedPerson}!`);
  }
};

jane.greet('Bobby');