function findElement(arr, func) {
  let result = ""
  for (let i = 0; i< arr.length; i++) {
    if (func(arr[i])) {
      return result = arr[i]
    } else {
      result = undefined
    }
  } return result
}

findElement([1, 2, 3, 4], num => num % 2 === 0);