function diffArray(arr1, arr2) {
  let newArr = [];
  let newArr1 = arr1.filter(x => !arr2.includes(x));
  let newArr2 = arr2.filter(x => !arr1.includes(x));
  if (newArr2.length !== 0 || newArr1.length !== 0) {
    newArr = newArr1.concat(newArr2);
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


function destroyer(arr, ...arg) {
  return arr.filter(x => !arg.includes(x))
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
