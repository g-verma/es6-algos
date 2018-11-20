
const qc = arr => {
  var len = arr.length;
  
  if (len < 2) return arr;

  var countr = arr[0];

  var ls = [];
  var gr = [];

  for (var i = 1; i < len; i++) {
    if (arr[i] < countr) {
      ls.push(arr[i]);
    } else {
      gr.push(arr[i]);
    }
  }

  
  return [...qc(ls), countr, ...qc(gr)];
};

var array = [5,8,4,7,2];
console.log(qc(array));
