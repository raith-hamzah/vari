import chai from 'chai'
import B from '../src/binomialDistribution.js'

chai.expect()
const expect = chai.expect

describe('Binomial Distribution', () => {
  describe('Given 10 independent trials of equal probability', () => {
    let dist
    before(function () {
      dist = B(10, 0.5)
    })
    it('should return mean of 5', () => {
      expect(dist.mean).to.equal(5)
    })
    it('should return the variance of 2.5', () => {
      expect(dist.variance).to.equal(2.5)
    })
    it('should return standard deviation of sqrt(2.5)', () => {
      expect(dist.standardDeviation).to.equal(Math.sqrt(2.5))
    })
  })
})
