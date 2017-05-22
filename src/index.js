import ncr from './binomialCoefficient';
import ev from './expectedValue';
import sd from './standardDeviation';
import variance from './variance';
import expDist from './exponentialDistribution';
import binDist from './binomialDistribution';
import normalDist from './normalDistribution';
import poisDist from './poissonDistribution';


const Vari = {
	name: 'Vari',
	version: '0.0.1',
	ncr,
	nchoosek: ncr,
	binomialCoefficient: ncr,
	ev,
	mean: ev,
	expectedValue: ev,
	sd,
	standardDeviation: sd,
	Exponential: exDist,
	Exp: expDistr,
	Binomial: binDist,
	B: binDist,
	Normal: normalDist,
	N: normalDist,
	Poisson: poisDist,
	P: poisDist

}

export default Vari;


