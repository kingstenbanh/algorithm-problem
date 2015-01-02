/*
  Find the greatest common divisor between two positive
  integer m and n
*/
/*
  Pseudocode
  - Divide m by n
  - If the reminder of dividing m by n is zero, return n
  - set n to m, set n to the reminder of m dividing by n
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
