import ncr from './binomialCoefficient'
import ev from './expectedValue'
import sd from './standardDeviation'
import variance from './variance'
import expDist from './exponentialDistribution'
import binDist from './binomialDistribution'
import normalDist from './normalDistribution'
import poisDist from './poissonDistribution'
import unifDist from './uniformDistribution'
import hyperDist from './hypergeometricDistribution'

const Vari = {
  name: 'Vari',
  version: '0.2.0',
  ncr,
  nchoosek: ncr,
  binomialCoefficient: ncr,
  E: ev,
  mean: ev,
  expectedValue: ev,
  sd,
  standardDeviation: sd,
  variance,
  var: variance,
  Exponential: expDist,
  Exp: expDist,
  Binomial: binDist,
  B: binDist,
  Normal: normalDist,
  N: normalDist,
  Poisson: poisDist,
  P: poisDist,
  Uniform: unifDist,
  U: unifDist,
  Hypergeometric: hyperDist,
  H: hyperDist

}
Object.keys(Vari).forEach(key => {
  export Vari[key] as key
})
export default Vari

