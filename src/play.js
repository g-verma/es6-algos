// Solution 1          Time complexity is O(n), is directly proportional to its size and will grow linearly.
const __bsearch = (arr, el) =>{
  arr.sort((a,b) =>{  return a-b; });
  var lowindex = 0;
  var highindex = arr.length - 1;
  var pos;
  var flag = false;

  while(highindex >= lowindex){
      pos = (lowindex + highindex) / 2;
          if(arr[pos] == el){
             flag = true;
             break; 
          }else if(el > arr[pos]){
              lowindex = pos + 1;
          }else{
              highindex = pos - 1;
          }
           
  }
  if(flag)
     return true;
  else
     return false;   
}

var barr = [5, 8, 1, 2, 15, 3, 200];
console.log("Element Found : ", __bsearch(barr, 1));


// function ninjaFunction(elem) {
//   // 20 lines of code working with elem

//   elem = clone(elem);
//   console.log(clone);
//   // 20 more lines, now working with the clone of the elem!
// }

// ninjaFunction(22);


function logArguments(...args) {
  for (let arg of args) {
    return arg;
  }
}

console.log(logArguments(barr))