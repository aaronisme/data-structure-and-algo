const LinkedList = require('../../linkedList/src/linkedlist')

class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
}

class HashTable {
  constructor() {
    this._table = []
  }

  _loopLinkedList(linkedlist, key) {
    let current = linkedlist.getHead()
    while (current) {
      if (current.element.key === key) {
        return current.element
      }
      current = current.next;
    }
  }

  put(key, value) {
    const position = this._loseloseHashCode(key);
    if (this._table[position]) {
      const element = this._loopLinkedList(this._table[position], key)
      if (element) {
        element.value = value
      }
      return this._table[position].append(new ValuePair(key, value))
    }

    const elementsLinkedList = new LinkedList();
    elementsLinkedList.append(new ValuePair(key, value));
    this._table[position] = elementsLinkedList;
  }

  get(key) {
    const position = this._loseloseHashCode(key);
    if (this._table[position]) {

      const element = this._loopLinkedList(this._table[position], key)
      if (element) {
        return element.value
      }
    }

    return undefined;

  }

  remove(key) {
    const position = this._loseloseHashCode(key);
    if (this._table[position]) {
      const element = this._loopLinkedList(this._table[position], key)
      if (element) {
        element.value = undefined;
      }
    }
  }

  _loseloseHashCode(key) {
    let hash = 0;
    for (let index = 0; index < key.length; index++) {
      hash += key.charCodeAt(index);
    }

    return hash % 37;
  }
}

module.exports = HashTable;