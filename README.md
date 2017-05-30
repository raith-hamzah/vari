# Vari 

A lightweight probability and statistics library for dealing with various distributions. [![Build Status](https://travis-ci.org/rahamzah/Vari.svg?branch=master)](https://travis-ci.org/rahamzah/Vari)

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
distribution.mean // expected value
distribution.sd // standard deviation of distribution
distribution.pdf(x) // returns a probability density
distribution.cdf(x) // returns a cumulutive density

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
  const expectedValue = Vari.E()
  const binomialCoefficient = Vari.ncr()
  const variance = Vari.Var()
```
