
exports.min = function min (array) {
  if(array === undefined || array.length === 0)
    return 0;
    let a = array[0];
    for(let i = 0; i < array.length; i++){
        if(array[i] < a)
        a = array[i]
    }
  return a;
}

exports.max = function max (array) {
  if(array === undefined  || array.length === 0)
    return 0;
    let a = array[0];
    for(let i = 0; i < array.length; i++){
        if(array[i] > a)
        a = array[i]
    }
  return a;
}

exports.avg = function avg (array) {
  if(array === undefined  || array.length === 0)
    return 0;
    let a = 0;
    for(let i = 0; i < array.length; i++){
        a += array[i]
    }
    return a/array.length;
}
