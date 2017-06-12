const chai = require('chai')
const PriorityQueue = require('../src/prorityQueue')

const expect = chai.expect;

describe('PriorityQueue', () => {

  it('can init a empty PriorityQueue', () => {
    const priorityQueue = new PriorityQueue();
    expect(priorityQueue.isEmpty()).to.be.true;
  })

  it('can push a priority element in the queue', () => {
    const element = {
      value: '123',
      priority: 1
    }

    const priorityQueue = new PriorityQueue();
    priorityQueue.enqueue(element);
    expect(priorityQueue.size()).to.equal(1);
  })

  it('can push a element by priority', ()=>{
    const element = {
      value: '123',
      priority: 2
    }

    const element2 = {
      value: '234',
      priority: 2
    }

    const element3 = {
      value: '678',
      priority: 3
    }

    const element4 = {
      value: '678',
      priority: 1
    }

    const priorityQueue = new PriorityQueue();
    priorityQueue.enqueue(element);
    priorityQueue.enqueue(element2);
    priorityQueue.enqueue(element3);
    priorityQueue.enqueue(element4);

    expect(priorityQueue.front()).to.deep.equal({
      value: '678',
      priority: 1
    });
  })

  it('can push a element to the end if the prority is not in', ()=>{
    const element = {
      value: '123',
      priority: 2
    }

    const element2 = {
      value: '234',
      priority: 3
    }


    const priorityQueue = new PriorityQueue();
    priorityQueue.enqueue(element);
    priorityQueue.enqueue(element2);


    expect(priorityQueue.front()).to.deep.equal({
      value: '123',
      priority: 2
    });

    expect(priorityQueue.size()).to.equal(2);
  })
})