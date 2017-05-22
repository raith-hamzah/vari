import math from 'mathjs';

export default function (lambda) {
	const expectedValue = lambda;
	const variance = lambda;
	const standardDeviation = Math.sqrt(variance);
	const mode = Math.floor(lambda);
	const median = Math.floor(lambda + (1/3) - (0.02/lambda));
	const skewness = Math.pow(lambda, (-1/2));
	return {
		expectedValue,
		mean: expectedValue,
		ev: expectedValue,
		variance,
		var: variance,
		standardDeviation,
		sd: standardDeviation,
		mode,
		pmf: (k) => {
			return (Math.pow(lambda,k)*Math.pow(Math.E, lambda*(-1)))/math.fact(k);
		},
		cdf: (k) => {
			let cumulation = 0;
			for (let i = 0; i <= k ; i++) {
				cumulation += this.pmf(i);
			}
			return cumulation;
		},
		skewness,

	}
}