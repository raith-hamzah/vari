
export default function (array, formatter) {
	let total = 0;
	array.forEach( value => {
		total += value;
	});
	if (!formatter) {
		return total / array.length;
	} else {
		return formatter(total / array.length);
	}
}