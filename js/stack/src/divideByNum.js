const Stack = require('./stack');


const divideByNum = base => decimalNumber => {
  const numberStack = new Stack();

  let divideNumber = decimalNumber;
  const digits = '0123456789ABCDEF';

  while (divideNumber > 0) {
    numberStack.push(digits[divideNumber % base])
    divideNumber = Math.floor(divideNumber / base)
  }

  if (numberStack.isEmpty()) {
    return '0'
  }

  let result = '';
  while (!numberStack.isEmpty()) {
    result += numberStack.pop().toString();
  }

  return result;
}


const divideBy2 = divideByNum(2)
const divideBy8 = divideByNum(8)
const divideBy16 = divideByNum(16)

module.exports = {
  divideBy2,
  divideBy8,
  divideBy16
};