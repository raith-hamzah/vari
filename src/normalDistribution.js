import {erf} from 'mathjs'

export default function (mu, v) {
  const sigma = Math.sqrt(v)
  const expectedValue = mu
  const variance = sigma * sigma
  const standardDeviation = sigma
  const mode = mu
  const median = mu
  const skewness = 0
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
    pdf: (x) => {
      return (1 / Math.sqrt(2 * Math.PI * sigma * sigma)) *
				Math.pow(Math.E, (-(Math.pow((x - mu), 2) / (2 * sigma * sigma))))
    },
    cdf: (x) => {
      return 0.5 * (1 + erf((x - mu) / (sigma * Math.sqrt(2))))
    },
    skewness,
    entropy: (0.5 * Math.log(2 * Math.PI * Math.E * sigma * sigma))

  }
}
