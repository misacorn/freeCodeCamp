//Flatten a nested array.
function steamrollArray(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(steamrollArray(val)) : acc.concat(val),
    []
  );
}

steamrollArray([1, [2], [3, [[4]]]]); //[1,2,3,4]
steamrollArray([[["a"]], [["b"]]]); //["a", "b"]
steamrollArray([1, [], [3, [[4]]]]); //[1, 3, 4]
steamrollArray([1, {}, [3, [[4]]]]); //[1, {}, 3, 4]
