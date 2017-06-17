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

  removeAt(postion) {
    if (postion > -1 && postion < this.length) {
      let current = this.head;
      let previous;
      let index = 0;
      if (postion == 0) {
        this.head = current.next;
        this.length --;
        return current.element;
      } else {
        while(index < postion){
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

}

module.exports = LinkedList;