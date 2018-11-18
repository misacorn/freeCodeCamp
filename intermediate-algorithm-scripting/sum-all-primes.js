function sumPrimes(number) {
  function isPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
  }
  let arr = [2];
  for ( var i = 3; i < number; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
  return arr.reduce((a,b) => a+b) + number;
}

sumPrimes(10);