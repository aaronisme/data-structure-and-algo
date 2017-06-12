let PriorityQueue = (function () {

  const items = new WeakMap();

  class PriorityQueue {
    constructor() {
      items.set(this, [])
    }

    enqueue(element) {
      const queueItmes = items.get(this)

      const index = this._find(element.priority);
      if (index > -1) {
        queueItmes.splice(index, 0, element)
      } else{
        queueItmes.push(element)
      }
    }


    _find(priority) {
      const queueItmes = items.get(this)
      for (let index = 0; index < queueItmes.length; index++) {
        if (priority < queueItmes[index].priority) {
          return index
        }
      }

      return -1;
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
      console.log(JSON.stringify(queueItmes).toString());
    }

    size() {
      const queueItmes = items.get(this);
      return queueItmes.length;
    }
  }

  return PriorityQueue
})();

module.exports = PriorityQueue;