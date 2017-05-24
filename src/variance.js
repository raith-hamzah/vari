export default function (array, property) {
	let ev = 0;
	let ev2 = 0;
	if (!property) {
		array.forEach(datum => {
			ev += datum;
		});
		array.forEach(array, datum => {
			ev2 += datum*datum;
		});
		return (ev2 / array.length) - Math.pow((ev / array.length), 2);
	} else {
		array.forEach(datum => {
			ev += datum[property];
		});
		array.forEach(array, datum => {
			ev2 += datum[property]*datum[property];
		});
		return (ev2 / array.length) - Math.pow((ev / array.length), 2);
	}
}