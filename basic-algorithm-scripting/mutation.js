function mutation(arr) {
  let arr1 = arr[1].toLowerCase().split("")
  let arr0 = arr[0].toLowerCase().split("")
  for (let i = 0; i < arr1.length; i++) {
    if (arr0.indexOf(arr1[i]) < 0) {
      return false
    } 
  } return true
}

mutation(["hello", "hey"]);