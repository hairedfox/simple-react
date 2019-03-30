// - arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
}

console.log(add(55, 1));

// - this keyword - no longer bound

const user = {
  name: 'Hai Tran',
  cities: ['New York', 'Hanoi', 'Phnom Penh'],
  printPlacesLived() {
    return this.cities.map(city => this.name + ' has lived in ' + city)
  }
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
  numbers: [1, 10, 100, 12, 43, 56],
  multiplyBy: 10,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy); 
  }
};

console.log(multiplier.multiply());