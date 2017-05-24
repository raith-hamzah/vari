export default function (array, property) {
  if (array.length === 0) {
  	return 0
  }
  let total = 0
  if (!property) {
    array.forEach(value => {
      total += value
    })
    return total / array.length
  } else {
    array.forEach(value => {
      total += value[property]
    })
    return total / array.length
  }
}
