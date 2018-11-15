function myReplace(str, before, after) {
  return str.replace(
    new RegExp(before, "gi"),
    /[A-Z]/.test(before[0])
      ? after.charAt(0).toUpperCase() + after.slice(1)
      : after
  );
}

function myReplace(str, before, after) {
  var re = new RegExp(before,"gi");
  if(/[A-Z]/.test(before[0])){
    after = after.charAt(0).toUpperCase()+after.slice(1);
     }
  var  newStr =  str.replace(re,after);

 return newStr;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");