const chai = require('chai')
const hotPotato = require('../src/hotPotato')

const expect = chai.expect;

describe('hotPotato', () => {

  it('will return correct result', () => {
    const nameList = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
    const result = hotPotato(nameList, 7);
    expect(result).to.equal('John')
  })
})