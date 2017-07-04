const sorts = require('../src/quick-sort');
const chai = require('chai');

const expect = chai.expect;
describe('quick Sort Function', () => {
  it('should use select sort to sort the array', () => {
    const inputArray = [5, 6, 7, 3];

    const sortedArray = [3, 5, 6, 7];
    expect(sorts.quickSort(inputArray)).to.deep.equal(sortedArray)
  });

})