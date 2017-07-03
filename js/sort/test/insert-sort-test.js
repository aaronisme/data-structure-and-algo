const sorts = require('../src/insert-sort');
const chai = require('chai');

const expect = chai.expect;
describe.only('Insert Sort Function', () => {
  it('should use insert sort to sort the array', () => {
    const inputArray = [3, 2, 1, 5];

    const sortedArray = [1, 2, 3, 5];
    expect(sorts.insertSort(inputArray)).to.deep.equal(sortedArray)
  });

})