const BinarySearchTree = require('../src/tree');

class AVLTree extends BinarySearchTree {
  constructor() {
    super()
  }

  insertNode(newNode, node) {
    if (newNode.key > node.key) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        node.right = this.insertNode(newNode, node.right)

        // balance the tree
        if ((this._height(node.right) - this._height(node.left)) > 1) {
          if (newNode.key > node.right.key) {
            // whether it is the RR node
            node = this.rotationRR(node);
          } else {
            node = this.rotationRL(node)
          }
        }
      }
    } else {
      if (node.left === null) {
        node.left = newNode;
      } else {
        node.left = this.insertNode(newNode, node.left)

        // balance the tree
        if ((this._height(node.left) - this._height(node.right)) > 1) {
          if (newNode.key < node.left.key) {
            // whether it is a LL node
            node = this.rotationLL(node)
          } else {
            node = this.rotationLR(node)
          }
        }
      }
    }

    return node;
  }

  get(key) {
    let node = this.root;
    while (node) {
      if (key > node.key) {
        node = node.right;
      } else if (key < node.key) {
        node = node.left
      } else {
        return node
      }
    }

    return null;
  }

  head(){
    return this.root.key
  }
  // for LR mode, you should first the left subtree of node which is R mode so use RR(rotate to left) -> LL mode -> balanced
  // LR -> LL -> balances
  rotationLR(node) {
    node.left = this.rotationRR(node.left);
    return this.rotationLL(node);
  }

  // for RL mode, you should first the right subtree of node which is L mode so use LL(rotate to right) -> RR mode -> balanced
  rotationRL(node) {
    node.right = this.rotationLL(node.right);
    return this.rotationRR(node)
  }

  // rotationRR means the after insert is the RR mode which should rotate to left side
  rotationRR(node) {
    let tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;

    return tmp;
  }

  // rotationLL means the after insert is the LL mode which should rotate to right side
  rotationLL(node) {
    var tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;

    return tmp;
  }
}

module.exports = AVLTree