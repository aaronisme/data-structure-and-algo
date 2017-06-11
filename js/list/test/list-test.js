const chai = require('chai');
const List = require('../src/list');

const expect = chai.expect;

describe('List', () => {
  it('constructor', () => {
    const newList = new List();
    expect(newList.length()).to.equal(0)
    expect(newList.dataStore).to.deep.equal([])
    expect(newList.pos).to.equal(0)
  });

  it('append, contains', () => {
    const newList = new List();
    newList.append('aaa');
    expect(newList.length()).to.equal(1);
    expect(newList.contains('aaa')).to.equal(true);
  })

  it('insert, remove', () => {
    const newList = new List();
    newList.append('aaa');
    newList.append('bbb');
    expect(newList.insert('ccc', 'aaa')).to.equal(true);
    expect(newList.insert('ccc', 'ddd')).to.equal(false);

    expect(newList.remove('ccc')).to.equal(true);
    expect(newList.length()).to.equal(2);
  })

  it('pos move', () => {
    const newList = new List();
    newList.append('aaa');
    expect(newList.getElement()).to.equal('aaa');
    newList.prev();
    expect(newList.getElement()).to.equal('aaa');

    newList.append('bbb');
    newList.next();

    expect(newList.getElement()).to.equal('bbb');
    newList.next();
    expect(newList.getElement()).to.equal('bbb');

  })
})