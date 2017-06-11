const chai = require('chai');
const Stack = require('../src/stack');

const expect = chai.expect;

describe('Stack', () => {

  it('constructor', () => {
    const newStack = new Stack();
    newStack.push('abc')
    expect(newStack.size()).to.equal(1)
    expect(newStack.peek()).to.equal('abc')
  });

it('isEmpty', () => {
    const oneStack = new Stack();
    expect(oneStack.size()).to.equal(0);
  })

})