const chai = require('chai')
const Queue = require('../src/queue')

const expect = chai.expect;

describe('Queue', ()=>{

  it('can init a empty Queue', ()=>{
    const newQueue = new Queue();
    expect(newQueue.isEmpty()).to.be.true;
  })

  it('can push element into the queue', ()=>{
    const newQueue = new Queue();
    newQueue.enqueue('123')

    expect(newQueue.size()).to.equal(1);
    expect(newQueue.front()).to.equal('123');
  })

  it('can take the first one element of queue out', ()=>{
    const newQueue = new Queue();
    newQueue.enqueue('123')
    newQueue.enqueue('234')

    expect(newQueue.dequeue()).to.equal('123')

  })
})