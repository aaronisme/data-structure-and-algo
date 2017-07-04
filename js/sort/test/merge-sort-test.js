const sorts = require('../src/merge-sort');
const chai = require('chai');

const expect = chai.expect;
describe('merge Sort Function', () => {
  it('should use merge sort to sort the array', () => {
    const inputArray = [3, 2, 1, 5];

    const sortedArray = [1, 2, 3, 5];
    expect(sorts.mergeSortArray(inputArray)).to.deep.equal(sortedArray)
  });
})