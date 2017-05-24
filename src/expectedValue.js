
export default function (array, property) {
	let total = 0;
	if (!property) {
		array.forEach( value => {
			total += value;
		});
		return total / array.length;
	} else {
		array.forEach( value => {
			total[property] += value
		});
		return total[property] / array.length;
	}
}