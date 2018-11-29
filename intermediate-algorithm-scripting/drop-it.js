function dropElements(arr, func) {
  // Drop them elements.
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length, arr.length);
}

dropElements([1, 2, 3], function(n) {return n < 3; });