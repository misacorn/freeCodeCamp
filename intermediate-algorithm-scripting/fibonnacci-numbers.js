function sumFibs(num) {
  let arr = [1, 1];
  let next = 0;
  while ((next = arr[0] + arr[1]) <= num) {
    arr.unshift(next);
  }
  return arr.filter(x => x % 2 !== 0).reduce((a, b) => a + b);
}

console.log(sumFibs(10));
