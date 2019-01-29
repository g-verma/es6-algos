
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
// function secondSmallest(arr){

//     if(arr.length<=1){
//         return 0;
//     }
//     var first = 999, second = 999;

//     for(var i=0;i<arr.length;i++){
    
//       if(arr[i]<first){
//             second =  first;
//             first = arr[i];
//         }
//         else if(arr[i]<second && arr[i]!=first){
//             second = arr[i];
//         }
//     }
//     return second;
// }


// /**
//  * Returns true if all tests pass; otherwise, returns false.
//  */
// function doTestsPass()
// {
//   // todo: add more test cases
//   var testArrays  = [[0],[0, 1],[1,3,2]];
//   var testResults = [0,1,2];
  
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


