const chai = require('chai');
const divideHelper = require('../src/divideByNum');

const expect = chai.expect;

describe('divideByNum', () => {

  describe('by2', () => {
    it('divide by 2', () => {
      expect(divideHelper.divideBy2(15)).to.equal('1111')
    })

    it('0', () => {
      expect(divideHelper.divideBy2(0)).to.equal('0')
    })

    it('1', () => {
      expect(divideHelper.divideBy2(1)).to.equal('1')
    })

    it('8', () => {
      expect(divideHelper.divideBy2(8)).to.equal('1000')
    })
  })

   describe('by8', () => {
    it('divide by 8', () => {
      expect(divideHelper.divideBy8(15)).to.equal('17')
    })

    it('0', () => {
      expect(divideHelper.divideBy8(0)).to.equal('0')
    })

    it('1', () => {
      expect(divideHelper.divideBy8(1)).to.equal('1')
    })

    it('16', () => {
      expect(divideHelper.divideBy8(16)).to.equal('20')
    })
  })

   describe('by 16', () => {
    it('divide by 2', () => {
      expect(divideHelper.divideBy16(15)).to.equal('F')
    })

    it('0', () => {
      expect(divideHelper.divideBy16(0)).to.equal('0')
    })

    it('1', () => {
      expect(divideHelper.divideBy16(1)).to.equal('1')
    })

    it('16', () => {
      expect(divideHelper.divideBy16(16)).to.equal('10')
    })
  })


})