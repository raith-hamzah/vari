import ncr from './binomialCoefficient'

export default function (n, p) {
  const expectedValue = n * p
  const variance = n * p * (1 - p)
  const standardDeviation = Math.sqrt(variance)
  const mode = Math.floor((n + 1) * p)
  const median = Math.floor(n * p)
  const skewness = (1 - 2 * p) / (Math.sqrt(n * p * (1 - p)))
  return {
    expectedValue,
    mean: expectedValue,
    ev: expectedValue,
    variance,
    var: variance,
    standardDeviation,
    sd: standardDeviation,
    mode,
    median,
    pmf: (k) => {
      return ncr(n, k) * Math.pow(p, k) * Math.pow((1 - p), (n - k))
    },
    cdf: (k) => {
      let cumulation = 0
      for (let i = 0; i <= k; i++) {
        cumulation += this.pmf(i)
      }
      return cumulation
    },
    skewness

  }
}
