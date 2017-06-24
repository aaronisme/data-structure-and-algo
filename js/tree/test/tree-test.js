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

  it('should return the max value in the tree', () => {
    const bstree = new BinarySearchTree();
    bstree.insert(11);
    bstree.insert(12);
    bstree.insert(10);
    bstree.insert(13);
    bstree.insert(9);

    expect(bstree.max()).to.equal(13);
  })

  it('should able to search value in the tree', () => {
    const bstree = new BinarySearchTree();
    bstree.insert(11);
    bstree.insert(12);
    bstree.insert(10);
    bstree.insert(13);
    bstree.insert(9);

    expect(bstree.search(13)).to.be.true
    expect(bstree.search(9)).to.be.true
    expect(bstree.search(8)).to.be.false
  })



  describe('remove', () => {
    let bstree;
    beforeEach(() => {
      bstree = new BinarySearchTree();
      bstree.insert(20);
      bstree.insert(10);
      bstree.insert(30);
      bstree.insert(8);
      bstree.insert(12);
      bstree.insert(7);
      bstree.insert(15);
      bstree.insert(29);
      bstree.insert(35);
    })

    it('should able to remove last left node in the tree', () => {
      bstree.remove(7)
      expect(bstree.get(8).left).to.equal(null)
    })

    it('should able to remove last right node in the tree', () => {
      bstree.remove(15)
      expect(bstree.get(12).right).to.equal(null)
    })

    it('should able to remove one node with singal left child in the tree', () => {
      bstree.remove(8)
      expect(bstree.get(10).left.key).to.equal(7)
    })

    it('should able to remove one node with singal right child in the tree', () => {
      bstree.remove(12)
      expect(bstree.get(10).right.key).to.equal(15)
    })

    it('should able to remove one node with two child on the left tree', () => {
      bstree.remove(10)
      expect(bstree.get(20).left.key).to.equal(12)
      expect(bstree.get(12).left.key).to.equal(8)
    })

    it('should able to remove one node with two child on the right tree', () => {
      bstree.remove(30)
      expect(bstree.get(20).right.key).to.equal(35)
      expect(bstree.get(35).left.key).to.equal(29)
    })
  })


  describe('other functions', () =>{
    beforeEach(() => {
      bstree = new BinarySearchTree();
      bstree.insert(20);
      bstree.insert(10);
      bstree.insert(30);
      bstree.insert(8);
      bstree.insert(12);
      bstree.insert(7);
      bstree.insert(15);
      bstree.insert(29);
      bstree.insert(35);
    })

    it('should return the height of the tree', () => {
      expect(bstree.treeHeight()).to.equal(3);
    })

  })
})