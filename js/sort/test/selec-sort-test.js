const sorts = require('../src/select-sort');
const chai = require('chai');

const expect = chai.expect;
describe('select Sort Function', () => {
  it('should use select sort to sort the array', () => {
    const inputArray = [3, 2, 1, 5];

    const sortedArray = [1, 2, 3, 5];
    expect(sorts.selectSort(inputArray)).to.deep.equal(sortedArray)
  });

})