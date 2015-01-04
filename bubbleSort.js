/*

*/

/*
 Pseudocode

*/
var bubbleSort = function(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('bubbleSort accepts only arrays');
  }
  
  for (var i = 0; i < array.length; i++) {
    var swapping = false;
    for (var j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swapping = true;
        swape(j, j+1, array);
      }
    }
    if (!swapping) { break; }
  }
  return array;
};

function swap(index1, index2, array) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
}
