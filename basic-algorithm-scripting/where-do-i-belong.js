function getIndexToIns(arr, num) {
  arr.sort( function (a,b) {return (a-b)})
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i
    }
    if (arr[arr.length] < num) {
      return arr.length+1
    }
  }
}

getIndexToIns([40, 60], 50);