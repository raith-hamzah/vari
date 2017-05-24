import {factorial} from 'mathjs'

export default function (n, k) {
  return factorial(n) / (factorial(n - k) * factorial(k))
}
