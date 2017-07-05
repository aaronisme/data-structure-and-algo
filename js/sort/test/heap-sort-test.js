const sorts = require('../src/heap-sort');
const chai = require('chai');

const expect = chai.expect;
describe('heap Sort Function', () => {
  // it('should use make the heap based on the input array', () => {
  //   const inputArray = [3, 2, 1, 5, 8, 4, 9];

  //   const heap = [9, 3, 8, 2, 5, 1, 4];

  //   const inputArray2 = [1, 2, 3]
  //   expect(sorts.heap(inputArray)).to.deep.equal(heap)
  //   expect(sorts.heap(inputArray2)).to.deep.equal([3, 1, 2])
  // });

  it('should should use heap sort to sort', () => {
    const inputArray = [3, 2, 1, 5, 8, 4, 9, 11, 45, 56, 87];

    const heap = [1, 2, 3, 4, 5, 8, 9, 11, 45, 56, 87];
    expect(sorts.heapSort(inputArray)).to.deep.equal(heap)
  });
})