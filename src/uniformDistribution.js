export default function (a, b) {
  const expectedValue = 0.5 * (a + b)
  const variance = (1 / 12) * Math.pow((b - a), 2)
  const standardDeviation = Math.sqrt(variance)
  const mode = null
  const median = expectedValue
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
      if (x < a || x > b) {
        return 0
      } else {
        return 1 / (b - a)
      }
    },
    cdf: (x) => {
      if (x < a) {
        return 0
      } else if (x > b) {
        return 1
      } else {
        return (x - a) / (b - a)
      }
    },
    entropy: Math.log10(b - a),
    skewness

  }
}
