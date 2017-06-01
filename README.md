# Vari 

A lightweight probability and statistics library for dealing with various distributions. [![Build Status](https://travis-ci.org/rahamzah/vari.svg?branch=master)](https://travis-ci.org/rahamzah/vari)

## Creating a distribution
We bring Vari into the project.
```javascript
import Vari from 'vari'
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
## Other functions
```javascript
const expectedValue = Vari.E(arr) // takes an array
const binomialCoefficient = Vari.ncr(5,3) // returns 10
const variance = Vari.Var(arr) // takes an array
```

## Vari accomodates a lot of notation styles:
```javascript
// Expected Value
Vari.E(arr) || Vari.mean(arr)
// Distributions (either full name or mathematical symbol)
Vari.B(n, p) || Vari.Binomial(n, p) //returns binomial distribution

