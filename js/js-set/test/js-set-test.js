const chai = require('chai')
const NewSet = require('../src/newSet')

const expect = chai.expect;

describe('NewSet', () => {

  let newSet;
  beforeEach(() => {
    newSet = new NewSet;
  })

  it('can init a new set', () => {
    expect(newSet.size()).to.equal(0);
  })

  it('have has function verify whether element in the set', () => {
    expect(newSet.has('abc')).to.equal(false);
  })

  it('can add value into the set if not exist', () => {
    expect(newSet.add('abc')).to.be.true;
    expect(newSet.add('abc')).to.be.false;
  })

  it('can delete the value if exist', () => {
    expect(newSet.delete('123')).to.be.false;
    newSet.add('abc');
    expect(newSet.delete('abc')).to.be.true;
  })

  it('can clear the set which will remove all the items', () => {
    newSet.add('aaa')
    newSet.clear();
    expect(newSet.has('aaa')).to.be.false;
    expect(newSet.size()).to.equal(0)
  })

  it('can return all the values in the set', () => {
    newSet.add('123')
    newSet.add('abc')
    expect(newSet.values()).to.be.deep.equal(['123', 'abc'])
  })

  it('can union two sets together', () => {
    const secondSet = new NewSet;
    newSet.add('123')
    newSet.add('abc')
    secondSet.add('abc')
    secondSet.add('efg')
    const unionSet = newSet.union(secondSet);

    expect(unionSet.values()).to.deep.equal(['123', 'abc', 'efg'])
  })

  it('choose the inter section of two sets', () => {
    const secondSet = new NewSet;
    newSet.add('123')
    newSet.add('abc')
    secondSet.add('abc')
    secondSet.add('efg')
    const interSectionSet = newSet.interSection(secondSet);

    expect(interSectionSet.values()).to.deep.equal(['abc'])
    expect(interSectionSet.size()).to.equal(1);
  })

  it('can tell the different set of the two sets', () => {
    const secondSet = new NewSet;
    newSet.add('123')
    newSet.add('abc')
    secondSet.add('abc')
    secondSet.add('efg')
    const interSectionSet = newSet.different(secondSet);

    expect(interSectionSet.values()).to.deep.equal(['123'])
    expect(interSectionSet.size()).to.equal(1);
  })

  it('can verify whether one set is include other', () => {
    const secondSet = new NewSet;
    newSet.add('abc')
    secondSet.add('abc')
    secondSet.add('efg')
    secondSet.include(newSet);

    expect(secondSet.include(newSet)).to.be.true;
    newSet.add('ghf')
    expect(secondSet.include(newSet)).to.be.false;
  })
})