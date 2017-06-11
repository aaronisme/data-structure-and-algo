const chai = require('chai');
const MoveList = require('../src/move');

const expect = chai.expect;

describe('MoveList', () => {

  it('loadMovie', () => {
    const newList = new MoveList();
    newList.loadMovie(['abc', 'efg']);
    newList.displayMoive()
    expect(newList.length()).to.equal(2);
  })
})