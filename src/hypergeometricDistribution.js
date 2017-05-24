import ncr from './binomialCoefficient';

export default function (N, K, n) {
	const expectedValue = n*(K / N);
	const variance = n*(K/N)*((N-K)/N)*((N-n)/(N-1));
	const standardDeviation = Math.sqrt(variance);
	const mode = Math.floor((n+1)*(K+1)/(n+2));
	const skewness = (N - 2*K) * Math.sqrt(N-1) * (N - 2*n) / 
		(Math.sqrt(n*K*(N-K)*(N-n))*(N-2));
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
			return ncr(K, k) * ncr(N - K, n - k) / ncr(N, n)
		},
		cdf: (k) => {
			let cumulation = 0;
			for (let i = 0; i <= k ; i++) {
				cumulation += this.pmf(i);
			}
			return cumulation;
		},
		skewness,

	};
}