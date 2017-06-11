let Stack = (function () {
  const items = new WeakMap();
  class Stack {
    constructor() {
      items.set(this, [])
    }

    push(element) {
      let s = items.get(this);
      s.push(element)
    }

    pop() {
      let s = items.get(this);
      return s.pop()
    }

    peek() {
      let s = items.get(this);
      return s[s.length - 1];
    }

    isEmpty() {
      let s = items.get(this);
      return s.length == 0;
    }

    size() {
      let s = items.get(this);
      return s.length;
    }
  }

  return Stack;
})()

/* why use weakMap and not directly the items as [],
   sicne it is a class which each instance should have
   they are own items directly use items will share it to all instances
   using map and this is a the key will let each instance have its own items.
*/
module.exports = Stack;