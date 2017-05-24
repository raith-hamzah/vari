import {fact} from 'mathjs'

export default function (n, k) {
  return fact(n) / (fact(n - k) * fact(k))
}
