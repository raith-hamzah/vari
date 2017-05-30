# Vari

A lightweight probability and statistics library for dealing with various distributions.

## Creating a distribution
We bring Vari into the project.
```javascript
import Vari from 'Vari'
```
We can then create a distribution. Functions return a distribution object.
```javascript
// Creates a Normal Distribution (return)
const distribution = Vari.Normal(mean, variance)
```
We can then access any information we want in the distribution.
```javascript
distribution.CDF(x) // returns a cumulutive density
distribution.sd // standard deviation of distribution
distribution.mean // expected value
```
Distributions included (With API):
```javascript
  const Binomial = Vari.B(n, p)
  const Hypergeometric = Vari.H(N, K, n)
  const Poisson = Vari.P(lamda)
  const Normal = Vari.N(mean, variance)
  const Exponential = Vari.Exp(lamda)
  const Uniform = Vari.U(a, b)
```
Other functions include:
```javascript
  const Expected value = Vari.E()
  const Binomial Coefficient = Vari.ncr()
  const Variance = Vari.Var()
```
