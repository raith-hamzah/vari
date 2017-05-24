import math from 'mathjs';

export default function (lambda) {
	const expectedValue = 1 / lambda;
	const variance = 1 / Math.pow(lambda, 2);
	const standardDeviation = Math.sqrt(variance);
	const mode = 0;
	const median = expectedValue * Math.log(2);
	const skewness = 2;
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
			return lambda * Math.pow(Math.E, ((0-lambda) * x)) 
		},
		cdf: (x) => {
			return 1 - Math.pow(Math.E, ((0-lambda) * x));
		},
		skewness,
		entropy: (1 - Math.log(lambda))

	};
}