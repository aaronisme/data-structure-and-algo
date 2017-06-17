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
      expect(NewLinkedlist.removeAt(1)).to.equal(null);
    });

    it('right index', () => {
      const newLinkedList = new LinkedList();
      newLinkedList.append('abc');
      newLinkedList.append('efg');
      newLinkedList.append('xyz');

      expect(newLinkedList.removeAt(1)).to.equal('efg');
      expect(newLinkedList.length).to.equal(2);
    })
  })

  describe('InsertAt', () => {
    it('wrong index', () => {
      const NewLinkedlist = new LinkedList();
      expect(NewLinkedlist.insertAt(-1)).to.equal(false);
      expect(NewLinkedlist.insertAt(2)).to.equal(false);
    });

    it('right index', () => {
      const newLinkedList = new LinkedList();
      newLinkedList.append('abc');
      newLinkedList.append('efg');

      expect(newLinkedList.insertAt(1, 'xyz')).to.equal(true);
      expect(newLinkedList.extractAt(1)).to.equal('xyz');
      expect(newLinkedList.length).to.equal(3);
    })
  })


  describe('toString', () => {
    it('should return empty string if the linked list is empty', () => {
      const newLinkedList = new LinkedList();
      expect(newLinkedList.toString()).to.equal('');
    });

    it('should return add the element in the linked list', () => {
      const newLinkedList = new LinkedList();
      newLinkedList.append('abc');
      newLinkedList.append('efg');
      newLinkedList.insertAt(1, 'xyz')
      expect(newLinkedList.toString()).to.equal('abc xyz efg');
    });
  })


  describe('IndexOf', () => {
    it('should return -1 if the element not in the list', () => {
      const newLinkedList = new LinkedList();
      expect(newLinkedList.indexOf('abc')).to.equal(-1);
    });

    it('should return right index in the list', () => {
      const newLinkedList = new LinkedList();
      newLinkedList.append('abc');
      newLinkedList.append('efg');
      newLinkedList.insertAt(1, 'xyz')
      expect(newLinkedList.indexOf('xyz')).to.equal(1);
    });
  });
});