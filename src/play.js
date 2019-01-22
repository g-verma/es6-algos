const firstNonRep = str => {
  var arr = str.split('');
  var result = '';
  var counter = 0;
 
  for (var i = 0; i < arr.length; i++) {
    counter = 0;
    for (var j = 0; j < arr.length; j++){
      if (arr[i] === arr[j]) {
        counter += 1;
      }
    }
    if (counter < 2) {
      result = arr[i];
      break;
    }
  }
  return result;
}
console.log('First Non-repeating char is: ', firstNonRep('abbac'));











const __anagram = arr => {
  var obj = {};  
    
  arr.forEach( item =>{
      const val = item.split('').sort().join('');
      
      if (obj[val]) {
          return obj[val].push(item);
      }

      obj[val] = [item];
  });

  return obj;
}

var str = ['cat', 'dog', 'tac', 'god' , 'act','actor'];
var output = Object.values(__anagram(str));
console.log(String(output));
