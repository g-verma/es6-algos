
function secondSmallest(x)
{
  // todo: implement this function

  const sortArray = arr => {
    var len = arr.length;
    
    if(len < 2) return arr;
    
    var counter = arr[0];

    var ls = [];
    var gr = [];

    for(var i = 1; i < len; i++) {
      if(arr[i] <= counter){
        ls.push(arr[i]);
      } else{
        gr.push(arr[i]); 
      }
    } 

    var sortedArr = [...sortArray(ls), counter, ...sortArray(gr)];
    
    let removeDup = arr => arr.filter((v,i) => arr.indexOf(v) === i);
    let uniqueArr = removeDup(sortedArr);

    return uniqueArr;
  }

   if(x.length < 2)
     return 0;
   else
   { 
     var output = sortArray(x);
     console.log(output);
     return output[1];
   }
}


/**
 * Returns true if all tests pass; otherwise, returns false.
 */
function doTestsPass()
{
  // todo: add more test cases
  var testArrays  = [[0], [-44,-44,-4,-3,22,5,-11,5,89,0,22], [22,65,1,666,6] ];
  var testResults = [0,-11, 6];

  // Run through the tests and make assertions
  for(var i = 0; i < testArrays.length; i++)
  {
  if(secondSmallest(testArrays[i]) != testResults[i])
  {
    return false;
  }
  }
  return true;
}


/**
 * Main execution entry.
 *//**
 * Main execution entry.
 */
if(doTestsPass())
{
  console.log("All tests pass!");
}
else
{
  console.log("There are test failures.");
}

