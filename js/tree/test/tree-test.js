const chai = require('chai');
const BinarySearchTree = require('../src/tree');

const expect = chai.expect;

describe('BSTree', () => {

  it('should insert collect node into the tree', () => {
    const bstree = new BinarySearchTree();
    bstree.insert(11);
    bstree.insert(12);
    bstree.insert(10);

    expect(bstree.root.key).to.equal(11)
    expect(bstree.root.left.key).to.equal(10)
    expect(bstree.root.right.key).to.equal(12);
  })

  it('should return the inOrder Traverse tree node ', () => {
    const result = [];
    const callback = node => result.push(node.key);

    const bstree = new BinarySearchTree();
    bstree.insert(11);
    bstree.insert(12);
    bstree.insert(10);
    bstree.inOrderTraverse(callback)
    expect(result).to.deep.equal([10, 11, 12])

  })

  it('should return the preOrder Traverse tree node ', () => {
    const result = [];
    const callback = node => result.push(node.key);

    const bstree = new BinarySearchTree();
    bstree.insert(11);
    bstree.insert(12);
    bstree.insert(10);
    bstree.preOrderTraverse(callback)
    expect(result).to.deep.equal([11, 10, 12])
  })

  it('should return the post Order Traverse tree node ', () => {
    const result = [];
    const callback = node => result.push(node.key);

    const bstree = new BinarySearchTree();
    bstree.insert(11);
    bstree.insert(12);
    bstree.insert(10);
    bstree.postOrderTraverse(callback)
    expect(result).to.deep.equal([10, 12, 11])
  })

  it('should return the min value in the tree', () => {
    const bstree = new BinarySearchTree();
    bstree.insert(11);
    bstree.insert(12);
    bstree.insert(10);
    bstree.insert(13);
    bstree.insert(9);

    expect(bstree.min()).to.equal(9);
  })

})