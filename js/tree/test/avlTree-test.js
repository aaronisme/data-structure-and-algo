const chai = require('chai');
const AVLTree = require('../src/avlTree');

const expect = chai.expect;

describe.only('AVLTREE', () => {
  let avlTree;
  beforeEach(() => {
    avlTree = new AVLTree();
  })

  it('should balance the tree if it is a LL mode', () => {
    avlTree.insert(10);
    avlTree.insert(8);
    avlTree.insert(7);
    expect(avlTree.get(8).left.key).to.equal(7)
    expect(avlTree.get(8).right.key).to.equal(10)
    expect(avlTree.head()).to.equal(8)
  })

  it('should balance the tree it it is a RR mode', () => {
    avlTree.insert(10);
    avlTree.insert(11);
    avlTree.insert(12);
    expect(avlTree.get(11).left.key).to.equal(10)
    expect(avlTree.get(11).right.key).to.equal(12)
    expect(avlTree.head()).to.equal(11)
  })

  it('should balance the tree it it is a LR mode', () => {
    avlTree.insert(10);
    avlTree.insert(8);
    avlTree.insert(9);
    expect(avlTree.get(9).left.key).to.equal(8)
    expect(avlTree.get(9).right.key).to.equal(10)
    expect(avlTree.head()).to.equal(9)
  })

  it('should balance the tree it it is a RL mode', () => {
    avlTree.insert(10);
    avlTree.insert(12);
    avlTree.insert(11);
    expect(avlTree.get(11).left.key).to.equal(10)
    expect(avlTree.get(11).right.key).to.equal(12)
    expect(avlTree.head()).to.equal(11)
  })

  it('should balance comlicate tree', () => {
    avlTree.insert(10);
    avlTree.insert(8);
    avlTree.insert(12);
    avlTree.insert(6);
    avlTree.insert(9);
    avlTree.insert(11);
    avlTree.insert(14);
    avlTree.insert(5);

    expect(avlTree.get(10).left.key).to.equal(8)
    expect(avlTree.get(10).right.key).to.equal(12)
    expect(avlTree.get(8).left.key).to.equal(6)
    expect(avlTree.get(8).right.key).to.equal(9)
    expect(avlTree.head()).to.equal(10)
  })
})