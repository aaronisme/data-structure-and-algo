const sorts = require('../src/bubble-sort');
const chai = require('chai');

const expect = chai.expect;
describe('Bubble Sort Function', () => {
  it('should use bubble sort to sort the array', () => {
    const inputArray = [3, 2, 1, 5];

    const sortedArray = [1, 2, 3, 5];
    expect(sorts.bubbleSort(inputArray)).to.deep.equal(sortedArray)
  });

  it('should return collect sorted Array based from improved Bubble sort', () => {
     const inputArray = [3, 5, 3, 8];

    const sortedArray = [3, 3, 5, 8];
    expect(sorts.bubbleSort(inputArray)).to.deep.equal(sortedArray)
  })
})