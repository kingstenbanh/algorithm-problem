/*
  Find the greatest common divisor between two positive
  integer m and n
*/
var greatestCommonDivisor = function (m, n) {
  if (m % n === 0) {
    return n;
  } else {
    return greatestCommonDivisor(n, m % n);
  }
};

var a = 35;
var b = 14;
console.log(greatestCommonDivisor(a, b));
