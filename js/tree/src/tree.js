class Node {
  constructor(key) {
    this.key = key;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new Node(key);
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(newNode, this.root)
    }
  }

  insertNode(newNode, node) {
    if (newNode.key > node.key) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(newNode, node.right)
      }
    } else {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(newNode, node.left)
      }
    }
  }

  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }

  inOrderTraverseNode(node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node)
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback)
  }

  preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node)
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback)
  }

  postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
      callback(node)
    }
  }

  min() {
    return this.minNode(this.root)
  }

  minNode(node) {
    if (node) {
      let currentNode = node;
      while (currentNode.left !== null) {
        currentNode = currentNode.left;
      }
      return currentNode.key
    }
    return undefined
  }

  max(){
    return this.maxNode(this.root)
  }

  maxNode(node){
    if(node){
      let currentNode = node;
      while(currentNode.right !== null){
        currentNode = currentNode.right;
      }

      return currentNode.key;
    }
    return undefined;
  }
}

module.exports = BinarySearchTree;