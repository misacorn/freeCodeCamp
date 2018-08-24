function getIndexToIns(arr, num) {
  var result = 0
  arr.sort( function (a,b) {return (a-b)
    });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
        result = i
      } else if (arr[i]< num && arr[i+1] > num) {
        result = i+1
      } else if (arr[i] < num) {
        result = i+1
      }
    }
  return result
}

getIndexToIns([10, 20, 30, 40, 50], 35)