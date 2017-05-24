import chai from 'chai'
import V from '../src/variance.js'

chai.expect()
const expect = chai.expect

describe('Variance', () => {
  describe('Given a property', () => {
    describe('Given an array of values', () => {
      it('should return the variance', () => {
        let arr = [{num: 1}, {num: 2}, {num: 3}]
        expect(V(arr, 'num').toFixed(4)).to.equal((2 / 3).toFixed(4))
      })
    })
    describe('Given an empty array', () => {
      it('should return 0', () => {
        let arr = []
        expect(V(arr, 'num')).to.equal(0)
      })
    })
  })
  describe('Not given a property', () => {
    describe('Given an array of values', () => {
      it('should return the variance', () => {
        let arr = [1, 2, 3, 4, 5]
        expect(V(arr)).to.equal(2)
      })
    })
    describe('Given an empty array', () => {
      it('should return 0', () => {
        let arr = []
        expect(V(arr)).to.equal(0)
      })
    })
  })
})
