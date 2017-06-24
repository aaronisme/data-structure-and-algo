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

  max() {
    return this.maxNode(this.root)
  }

  maxNode(node) {
    if (node) {
      let currentNode = node;
      while (currentNode.right !== null) {
        currentNode = currentNode.right;
      }

      return currentNode.key;
    }
    return undefined;
  }

  search(key) {
    let node = this.root;
    while (node) {
      if (key > node.key) {
        node = node.right;
      } else if (key < node.key) {
        node = node.left
      } else {
        return true
      }
    }

    return false;
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

  remove(key) {
    let currentNode = this.root;
    let parentNode = this.root;
    while (currentNode) {
      if (key > currentNode.key) {
        parentNode = currentNode
        currentNode = currentNode.right
      } else if (key < currentNode.key) {
        parentNode = currentNode
        currentNode = currentNode.left
      } else {
        if (currentNode.left == null && currentNode.right == null) {
          this.relation(parentNode, currentNode) == 'left' ? parentNode.left = null : parentNode.right = null;
          return;
        } else if (currentNode.left != null && currentNode.right != null) {
          if (this.relation(parentNode, currentNode) == 'left') {
            currentNode.right.left = currentNode.left
            parentNode.left = currentNode.right;
          } else {
            currentNode.right.left = currentNode.left
            parentNode.right = currentNode.right
          }
          return;
        } else {
          this.relation(parentNode, currentNode) == 'left' ? parentNode.left = this.getChildNode(currentNode) : parentNode.right = this.getChildNode(currentNode)
          return;
        }
      }
    }
  }

  relation(parentNode, childNode) {
    if (parentNode.left == childNode) {
      return 'left'
    } else {
      return 'right'
    }
  }

  getChildNode(node) {
    if (node.left) {
      return node.left
    }

    if (node.right) {
      return node.right
    }
  }

  _height(node) {
    if (node === null) {
      return -1;
    } else {
      return Math.max(this._height(node.left), this._height(node.right)) + 1;
    }
  }

  treeHeight(){
    return this._height(this.root);
  }
}

module.exports = BinarySearchTree;