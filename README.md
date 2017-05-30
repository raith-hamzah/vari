# Vari

A lightweight probability and statistics library for dealing with various distributions.

## Creating a distribution
We bring Vari into the project.
```javascript
import Vari from from 'Vari'
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
  * Binomial - Vari.B()
  * Hypergeometric - Vari.H()
  * Poisson - Vari.P()
  * Normal - Vari.N()
  * Exponential - Vari.Exp()
  * Uniform - Vari.U()

Other functions include:
  * Expected value - Vari.E()
  * Binomial Coefficient - Vari.ncr()
  * Variance - Vari.Var()
