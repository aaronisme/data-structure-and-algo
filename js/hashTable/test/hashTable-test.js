const chai = require('chai');
const HashTable = require('../src/hashTable');

const expect = chai.expect;

describe('HashTable', () => {

  let newHashTable;
  beforeEach(() => {
    newHashTable = new HashTable()
  })

  it('can put a element into a hashTable', () => {
    newHashTable.put('key', 'valueOne')
    expect(newHashTable.get('key')).to.equal('valueOne');
    expect(newHashTable.get('abc')).to.equal(undefined);
  })


  it('can remove a element into  a hashTable', () => {
    newHashTable.put('key', 'valueOne')
    newHashTable.remove('key')
    expect(newHashTable.get('key')).to.equal(undefined);
  })

  it('can update the value in the same key', () => {
    newHashTable.put('key', 'valueOne')
    newHashTable.put('key', 'valueTwo')
    expect(newHashTable.get('key')).to.equal('valueTwo');
  })


  it('can store two values in the same hash key', () => {
    newHashTable.put('Jonathan', 'valueOne')
    newHashTable.put('Jamie', 'valueOne')
    expect(newHashTable.get('Jonathan')).to.equal('valueOne');
    expect(newHashTable.get('Jamie')).to.equal('valueOne');
  })

})