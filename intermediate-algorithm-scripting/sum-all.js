function sumAll(arr) {
  let sum = 1;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i
  }
  return sum
}

sumAll([4,1])