const Queue = require('./queue')

const hotPotato = (nameList, num) => {

  let queue = new Queue();

  for (let name of nameList) {
    queue.enqueue(name);
  }

  let elimated;
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      const item = queue.dequeue()
      queue.enqueue(item);
    }

    elimated = queue.dequeue()
    console.log('this round finished. out is:', elimated)
  }

  elimated = queue.dequeue()
  console.log('the winner is', elimated)
  return elimated
}

module.exports = hotPotato;