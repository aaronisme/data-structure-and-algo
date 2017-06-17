class Element {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0
    this.head = null;
  }

  append(element) {
    const newElement = new Element(element);
    if (this.length == 0) {
      this.head = newElement;
      this.length++;
    } else {
      let current = this.head
      while (current.next != null) {
        current = current.next;
      }

      current.next = newElement;
      this.length++;
    }
  }

  extractAt(postion) {
    if (postion > -1 && postion < this.length) {
      let current = this.head;
      let previous;
      let index = 0;
      while (index < postion) {
        previous = current;
        current = current.next;
        index++;
      }
      return current.element
    } else {
      return null
    }
  }

  removeAt(postion) {
    if (postion > -1 && postion < this.length) {
      let current = this.head;
      let previous;
      let index = 0;
      if (postion == 0) {
        this.head = current.next;
        this.length--;
        return current.element;
      } else {
        while (index < postion) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = current.next;
        this.length--;
        return current.element
      }
    } else {
      return null
    }
  }

  insertAt(postion, element) {
    const newElement = new Element(element);

    if (postion > -1 && postion <= this.length) {
      let current = this.head;
      let previous;
      let index = 0;
      if (postion == 0) {
        this.head = newElement;
        newElement.next = current
        this.length++;
        return true;
      } else {
        while (index < postion) {
          previous = current;
          current = current.next;
          index++
        }

        previous.next = newElement;
        newElement.next = current;
        this.length++;
        return true;
      }
    } else {
      return false
    }
  }

  toString() {
    let current = this.head;
    let string = '';
    while (current) {
      string += current.element + (current.next ? ' ' : '');
      current = current.next;
    }
    return string;
  }

  indexOf(element) {
    let current = this.head;
    let index = 0;
    let result = -1;
    while (current) {
      if (current.element === element) {
        result = index;
        return result;
      }
      current = current.next;
      index++;
    }

    return result;
  }

}

module.exports = LinkedList;