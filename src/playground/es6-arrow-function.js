const square = function (x) {
  return x * x;
}

const squareArrow = x => x * x;

console.log(squareArrow(10));

const getFirstName = (fullName) => {
  if (fullName) {
    return fullName.split(' ')[0];
  }
}

const getFirstNameShort = fullName => fullName && fullName.split(' ')[0];

console.log(getFirstName('Hai Tran'))
console.log(getFirstName('a s '))