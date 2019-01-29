function mostRepeated(str){
  let count = {};
  for(let val of str){
    if(!count.hasOwnProperty(val)){
    count[val] = 1;
    }else{
    count[val] += 1;
  }
  }
  console.log(count);
  let maxCount = Math.max(...count);
  return Object.keys(count)[Object.values(count).indexOf(maxCount)]
  }
  
  var s = mostRepeated("abcabcc"); 
  console.log(s);




// /* Problem Name is &&& Second Smallest &&& PLEASE DO NOT REMOVE THIS LINE. */

// /**
//  * Instructions to candidate.
//  * 1) Run this code in the REPL to observe its behaviour. The
//  *    execution entry point is main().
//  * 2) Consider adding some additional tests in doTestsPass().
//  * 3) Implement secondSmallest() correctly.
//  * 4) If time permits, some possible follow-ups.
//  */


// /**
//  * Returns the second smallest element in the array x.
//  * Returns 0 if the array has fewer than 2 elements.
//  */
// function secondSmallest(x){
//   if(x.length <=1) return 0;

//   let [first, second] = [999,999];

//   for(let item of x){
//     if(item < second){
//       if(item < first){
//         second = first;
//         first = item;
//       } else{
//         second = item;
//       }
//     }
//   }

//   return second;

// }


// /**
//  * Returns true if all tests pass; otherwise, returns false.
//  */
// function doTestsPass()
// {
//   // todo: add more test cases
//   var testArrays  = [[0],[0, 1]];
//   var testResults = [0,1];
  
//   // Run through the tests and make assertions
//   for(var i = 0; i < testArrays.length; i++)
//   {
//   if(secondSmallest(testArrays[i]) != testResults[i])
//   {
//     return false;
//   }
//   }
//   return true;
// }


// /**
//  * Main execution entry.
//  */
// if(doTestsPass())
// {
//   console.log("All tests pass!");
// }
// else
// {
//   console.log("There are test failures.");
// }


