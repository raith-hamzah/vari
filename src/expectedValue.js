export default function (array, property) {
  if (array.length === 0) {
    return 0
  }
  let total
  if (property) {
    total = array.reduce((a, b) => a + b[property], 0)
    return total / array.length
  } else {
    total = array.reduce((a, b) => a + b)
    return total / array.length
  }
}
