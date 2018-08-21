function frankenSplice(arr1, arr2, n) {
  var arr2new = arr2.slice(0, n)
  var arr2new1 = arr2.slice()
  arr2new1.splice(0,n)
  var result = arr2new.concat(arr1).concat(arr2new1)
  return result
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);