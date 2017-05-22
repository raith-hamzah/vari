import math from 'mathjs';

export default function(n, k) {
	return math.fact(n)/(math.fact(n-k)*math.fact(k));
}