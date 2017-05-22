export default function (array, formatter) {
	let ev = 0;
	let ev2 = 0;
	array.forEach(value => {
		ev += value;
	});
	array.forEach(array, value => {
		ev2 += value*value;
	});
	if (!formatter) {
		return (ev2 / array.length) - Math.pow((ev / array.length), 2);
	} else {
		return formatter((ev2 / array.length) - Math.pow((ev / array.length), 2));
	}
}