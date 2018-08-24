function getIndexToIns(arr, num) {
  var result = 0
  arr.sort( function (a,b) {return (a-b)
    });
  if (arr[arr.length - 1] < num) {
      result = arr.length
    }
  else {
    for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      result = i
    } 
  }
  }
  return result
}

getIndexToIns([10, 20, 30, 40, 50], 35)