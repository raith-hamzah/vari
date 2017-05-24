import chai from 'chai'
import ncr from '../src/binomialCoefficient.js'

chai.expect()
const expect = chai.expect

describe('Binomial Coefficient (ncr)', () => {
  it('should return the correct number', () => {
    let n = 5, r = 3
    expect(ncr(5, 3)).to.be.equal(10)
  })
})
