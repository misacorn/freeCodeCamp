function largestOfFour(arr) {
  let largest = [0,0,0,0]
  for (let i = 0; i < arr.length; i++) {
    largest[i] = arr[i][0]
    for (let n = 0; n <arr[i].length; n++) {
      if (arr[i][n] > largest[i]) {
        largest[i] = arr[i][n]
      }
    }
  }
  return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);