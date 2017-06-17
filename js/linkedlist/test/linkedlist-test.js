const chai = require('chai');
const LinkedList = require('../src/linkedlist');

const expect = chai.expect;

describe('LinkedList', () => {

  it('append', () => {
    const linkedList = new LinkedList();
    linkedList.append('123')
    linkedList.append('345')
    expect(linkedList.length).to.equal(2);
  })

  describe('removeAt', () => {
    it('wrong index', () => {
      const NewLinkedlist = new LinkedList();
      expect(NewLinkedlist.removeAt(-1)).to.equal(null);
      expect(NewLinkedlist.removeAt(0)).to.equal(null);
    });

    it('right index', () =>{
      const newLinkedList = new LinkedList();
      newLinkedList.append('abc');
      newLinkedList.append('efg');
      newLinkedList.append('xyz');

      expect(newLinkedList.removeAt(1)).to.equal('efg');
      expect(newLinkedList.length).to.equal(2);
    })
  })


})