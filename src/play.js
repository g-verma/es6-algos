// Solution 1          Time complexity is O(n), is directly proportional to its size and will grow linearly.
const __anagram = arr => {
  let obj = {};   // an object to store all the words after sorting
  arr.forEach( item =>{
      const val = item.split('').sort().join('');
      if (obj[val]) {
          return obj[val].push(item);
      }
      obj[val] = [item];
  });
  return obj;
}


var str = ['cat', 'dog', 'tac', 'god' , 'act','xyz'];

var output = Object.values(__anagram(str));
console.log(String(output));
