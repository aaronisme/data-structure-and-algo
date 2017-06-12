let Queue = (function () {

  const items = new WeakMap();

  class Queue {
    constructor() {
      items.set(this, [])
    }

    enqueue(element) {
      const queueItmes = items.get(this)
      queueItmes.push(element)
    }

    dequeue() {
      const queueItmes = items.get(this);
      return queueItmes.shift();
    }

    front() {
      const queueItmes = items.get(this);
      return queueItmes[0];
    }

    isEmpty() {
      const queueItmes = items.get(this);
      return queueItmes.length == 0
    }

    print() {
      const queueItmes = items.get(this);
      console.log(queueItmes.toString());
    }

    size() {
      const queueItmes = items.get(this);
      return queueItmes.length;
    }
  }

  return Queue
})();

module.exports = Queue;