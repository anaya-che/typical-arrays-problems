
exports.min = function min (array) {
  if ((array != undefined) && (array.length > 0)) { 
    array.sort((a, b) => a - b);
    return array[0];
  } 
  else { return 0; }
}

exports.max = function max (array) {
  if ((array != undefined) && (array.length > 0)) {
    array.sort((a, b) => b - a)
    return array[0];
  } 
  else { return 0; }
}

exports.avg = function avg (array) {
  if ((array != undefined) && (array.length > 0)) {
    let n = 0; array.map((val) => n += val)
    return (n / array.length);
  } 
  else { return 0; }
}
