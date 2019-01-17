const secondSmallest = arr =>{
  if (arr.length < 2) {
    return 0;
  }

  var first = arr[0];
  var second = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < second) {
      if (arr[i] < first) {
        second = first;
        first = arr[i];
      } else {
        second = arr[i];
      }
    }
  }
  return ` second smallest: ` + second;
}

var k = [40,7,2,800,5];
console.log(secondSmallest(k))


// all combinations 
var arr = ['abc'];

var allAnagrams = function(arr) {
    var anagrams = {};
    arr.forEach(function(str) {
        var recurse = function(ana, str) {
            if (str === '') 
                anagrams[ana] = 1;
            for (var i = 0; i < str.length; i++)
                recurse(ana + str[i], str.slice(0, i) + str.slice(i + 1));
        };
        recurse('', str);
    });
    return Object.keys(anagrams);
}

console.log(allAnagrams(arr));
