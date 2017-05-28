export default function (array, property) {
  if (array.length === 0) {
    return 0
  }

  let ev = 0
  let ev2 = 0

  if (!property) {
    array.forEach(value => {
      ev += value
      ev2 += value * value
    })
    return (ev2 / array.length) - Math.pow((ev / array.length), 2)
  } else {
    array.forEach(value => {
      ev += value[property]
    })
    array.forEach(value => {
      ev2 += value[property] * value[property]
    })
    return (ev2 / array.length) - Math.pow((ev / array.length), 2)
  }
}
